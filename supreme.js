const cards = document.querySelector('.img__card');
cards.forEach(card => {
card.addEventListener('click', () => {
        cards.forEach(c => {
            if(c !== card){
                c.classList.remove('active')
            }
        });
        card.classList.add('active')
    });
});
console.log(cards);