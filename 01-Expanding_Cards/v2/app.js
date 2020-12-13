const cardContainer = document.querySelectorAll('.card');

cardContainer.forEach(card => {
    card.addEventListener('mouseover', function() {
        removeClass();
        card.classList.add('active');
    });
})

function removeClass() {
    cardContainer.forEach(card => card.classList.remove('active'))
}