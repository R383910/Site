// Gestion de la navigation entre les pages
function showPage(pageId) {
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    document.getElementById(pageId).classList.add('active');
}

// Gestion des événements de survol pour les boutons
function initButtonEffects() {
    const buttons = document.querySelectorAll('.action-button');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', (e) => {
            e.target.style.transform = 'translateY(-5px)';
        });
        button.addEventListener('mouseleave', (e) => {
            e.target.style.transform = 'translateY(0)';
        });
    });
}

// Fonction pour animer le texte avec un effet de fade in
function animateText() {
    const texts = document.querySelectorAll('.fade-in-text');
    texts.forEach(text => {
        text.style.opacity = '0';
        let delay = 0;
        Array.from(text.textContent).forEach((char, index) => {
            setTimeout(() => {
                text.style.opacity = '1';
            }, delay);
            delay += 50;
        });
    });
}

// Initialisation au chargement de la page
document.addEventListener('DOMContentLoaded', () => {
    initButtonEffects();
    animateText();
});

// Gestion du redimensionnement de la fenêtre
window.addEventListener('resize', () => {
    // Réinitialiser les runes d'arrière-plan
    const container = document.querySelector('.background-runes');
    if (container) {
        container.innerHTML = '';
    }
});
