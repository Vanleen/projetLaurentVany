$(function () {
    let pX = $('nav button');
    let nav = $('nav');
    let menuBtn = $('.menu-btn');
    let menuNav = $(".menu-nav");
    let sousMenu = $(".sous-menu");

    sousMenu.hide();

    menuNav.on('click', function () {
        sousMenu.not($(this).children(".sous-menu")).hide();
        $(this).children(".sous-menu").slideToggle(500);
    });
    menuBtn.on('click', function () {
        nav.css('transform', 'translateX(0%)');
        nav.css('transition', '.8s ease');
    });
    pX.on('click', function () {
        nav.css('transform', 'translateX(-100%)');
        nav.css('transition', '.8s ease');
    });

















});////////////////////////

// Au chargement, on affiche tous les films présents dans le fichier data.js
// Selection du contenur des articles
const displayMovies = document.querySelector('.displayMovies');
// On cache la section detailsMovies
const detailsMovies = document.querySelector('.detailsMovies');
// console.log(detailsMovies);
detailsMovies.classList.add('hidden');
// On cache la modal au chargement de la page
const modalTrailer = document.querySelector('#modal');
modalTrailer.classList.add('hidden');
// On génére les items des films dans la section displayMovies
for (let i = 0; i < movies.length; i++) {
    displayMovies.innerHTML += `
        <article class="card" data-index="${i}">
            <div class="card-img">
                <img src="${movies[i].image}" alt="">
            </div>
            <button class="card-content">
                <h2>${movies[i].title}</h2>
            </button>
        </article>
    `;
}
/**
 * fonction showDetails
 * role : afficher le detail d'un film
 */
function showDetails() {
    // On récupère l'index du film qui a été cliqué
    let index = this.getAttribute('data-index');
    console.log(index);
    // On cache la liste des films
    document.querySelector('.mainContent').classList.add('hidden');
    // On affiche le panneau de détails
    detailsMovies.classList.remove('hidden');
    // On affiche les données du film cliqué
    const imageElt = document.querySelector('.detailsImg img');
    imageElt.src = movies[index].image;
    imageElt.alt = movies[index].title;
    const titleElt = document.querySelector('.title');
    titleElt.textContent = movies[index].title
    const dateElt = document.querySelector('.date');
    dateElt.textContent = movies[index].date;
    const resumeElt = document.querySelector('.resume');
    resumeElt.textContent = movies[index].resume;
    // Video
    const video = document.querySelector('iframe');
    video.setAttribute('src', 'https://www.youtube.com/embed/' + movies[index].traileryt + '?enablejsapi=1&version=3&playerapiid=ytplayer');
}
// Ecouteur d'eveneemnt pour afficher les détails
const cardMovies = document.querySelectorAll('.card');
// console.log(cardMovies);
for (let card of cardMovies) {
    card.addEventListener('click', showDetails);
}
// Gestion du clic sur le bouton retour
const btnBack = document.querySelector('.back button');
// console.log(btnBack);
btnBack.addEventListener('click', function () {
    // on affiche la liste des movies
    document.querySelector('.mainContent').classList.remove('hidden');
    // on cache les détails
    detailsMovies.classList.add('hidden');
});
// Gestion de l'affichage de la modal
const btnBa = document.querySelector('.btn');
btnBa.addEventListener('click', function () {
    modalTrailer.classList.remove('hidden');
});
// Gestion pour cacher la modal
modalTrailer.addEventListener('click', function () {
    // arreter la video au clic à la fermeture de la modal -> API youtube
    document.querySelector('iframe').contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');
    modalTrailer.classList.add('hidden');
});