# Mémo : Vanilla JS & Express Recap

Petit mémo des bases revues dans ce projet **Pâtissières** (Fullstack JS).

## 1. Communication Client-Serveur (Fetch API)

Utilisation de `async/await` pour des requêtes asynchrones lisibles.

- **GET** (`fetch(url)`) : Récupérer la liste.
- **POST** : Créer une entrée (`method: "POST"`, body stringifié).
- **PUT** : Modifier une entrée.
- **DELETE** : Supprimer une entrée.

**Note** : Ne pas oublier `event.preventDefault()` sur le submit du formulaire pour empêcher le rechargement de la page.

## 2. Manipulation du DOM (Vanilla JS)

- `document.querySelector` : Cibler des éléments.
- `document.createElement` & `appendChild` : Créer et ajouter des éléments HTML dynamiquement.
- `innerHTML` : Pour injecter du template string (` `) rapidement.
- `dataset.id` : Stocker/récupérer l'ID de l'élément directement dans le HTML (`data-id="..."`).

## 3. Event Delegation

Plutôt que de mettre un listener sur chaque nouveau bouton, on écoute le clic sur le conteneur parent (`#patissieres-container`) et on vérifie la cible (`event.target`).

## 4. Backend (Express + Neon)

- Serveur basique avec 4 routes (CRUD).
- `cors` activé pour autoriser le front (localhost) à appeler l'API.
- Requêtes SQL simples via le driver serverless de Neon.
