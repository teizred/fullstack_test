async function fetchPatissieres() {
    const response = await fetch("http://localhost:4242/");
    const data = await response.json();
    console.log(data);

    const container = document.querySelector("#patissieres-container")

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

        const btnModify = card.querySelector(".btn-modify");
        btnModify.addEventListener("click", () => {
            const input = card.querySelector("input");
            input.style.display = "block";
        });
    });
};
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





fetchPatissieres();