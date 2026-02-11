async function fetchPatissieres() {
    const response = await fetch("http://localhost:4242/");
    const data = await response.json();
    console.log(data);

//ajout d'une patissiere
    const container = document.querySelector("#patissieres-container");
    const form = document.querySelector(".form");

    form.addEventListener("submit", async (event) => {
        event.preventDefault();
        const name = form.querySelector("#name").value;

        if (name) {
             const response = await fetch("http://localhost:4242/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ name }),
            });
            const data = await response.json();
            console.log(data);
            location.reload();
        }
    });
//affichage des patissieres
    data.forEach(patissiere => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `
            <div class="card-content">
                <span class="card-title">${patissiere.name}</span>
            </div>
            <div class="card-actions">
                <button class="btn-modify" data-id="${patissiere.id}">Modifier</button>
                <input type="text" id="name" name="name" style="display: none;"> 
                <button class="btn-delete" data-id="${patissiere.id}">Supprimer</button>
            </div>
        `;
        container.appendChild(card);

        const btnDelete = card.querySelector(".btn-delete");
        btnDelete.addEventListener("click", () => {
            deletePatissieres(patissiere.id);
        });

    });
};
//suppression d'une patissiere
async function deletePatissieres(id) {
    const response = await fetch(`http://localhost:4242/`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ id }),
    });
    const data = await response.json();
    console.log(data);
    location.reload()
};

//modification d'une patissiere
async function modifierPatissieres(id, name) {
    const response = await fetch (`http://localhost:4242/`,
        {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ id, name }),
        }
    );
    const data = await response.json();
    console.log(data);
    location.reload();
}

//modification d'une patissiere

document.querySelector("#patissieres-container").addEventListener("click", (event) => {
    if (event.target.classList.contains("btn-modify")) {
        const button = event.target;
        const cardAction = button.parentElement;
        const cardContent = cardAction.previousElementSibling;
        const nameSpan = cardContent.querySelector(".card-title");
        const input = cardAction.querySelector("input[name='name']");
        
        if (button.textContent === "Modifier") {
            nameSpan.style.display = "none";
            input.style.display = "inline-block";
            input.value = nameSpan.textContent;
            
            button.textContent = "Valider";
        } 
        else if (button.textContent === "Valider") {
            const newName = input.value;
            const id = button.dataset.id;
            
            modifierPatissieres(id, newName);
        }
    }
});

fetchPatissieres();