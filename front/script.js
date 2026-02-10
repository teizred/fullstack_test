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
                <button class="btn-modify">Modifier</button>
                <button class="btn-delete">Supprimer</button>
            </div>
        `;
        
        container.appendChild(card);
    })
    
}

fetchPatissieres();