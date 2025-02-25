// Fonction pour afficher une section spécifique et cacher les autres
function showSection(sectionId) {
    // Liste de toutes les sections
    const sections = document.querySelectorAll('.section');

    // Masquer toutes les sections
    sections.forEach(section => {
        section.style.display = 'none';
    });

    // Afficher la section correspondante
    const sectionToShow = document.getElementById(sectionId);
    if (sectionToShow) {
        sectionToShow.style.display = 'block';
    }

    // Fermer automatiquement la navbar (menu burger) après avoir sélectionné une section
    toggleMenu(); // Ferme le menu burger
}

// Fonction pour gérer l'affichage du menu burger (pour les petits écrans)
function toggleMenu() {
    const navbarLinks = document.querySelector('.navbar-links');
    navbarLinks.classList.toggle('active'); // Cela ouvre et ferme le menu burger
}

function showProjectDetails(projectIndex) {
    const project = projects[projectIndex - 1]; 
    document.getElementById("project-title").innerText = project.title;
    document.getElementById("project-description").innerText = project.description;
    document.getElementById("project-link").href = project.link;

    document.getElementById("project-details").style.display = "flex";
}

function closeProjectDetails() {
    document.getElementById("project-details").style.display = "none";
}

// Fonction pour gérer l'affichage du site après le chargement
window.onload = function() {
    // Simuler un temps de chargement (ici 3 secondes, mais tu peux ajuster)
    setTimeout(() => {
        // Ajouter la classe 'loaded' au body pour démarrer la transition
        document.body.classList.add('loaded');
        
        // Attendre que la transition de disparition soit terminée avant de continuer
        setTimeout(() => {
            // Afficher la première section (Accueil) après le chargement
            showSection('accueil');
        }, 1000); // Temps de la transition (1 seconde)
    }, 3000); // Temps de chargement de 3 secondes (peut être ajusté)
}

// Initialisation : afficher la section Accueil dès que le contenu est chargé
document.addEventListener('DOMContentLoaded', function () {
    showSection('accueil'); // Affiche la section Accueil par défaut
});
