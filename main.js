const cart = document.querySelector('.header__goods');
const burgerBtn = document.querySelector('.header__burger');
const shoes = document.querySelectorAll('.item__shoe');
let switchCards;


shoes.forEach(function(elem){
    const shoe = document.querySelector('.shoe')
    elem.addEventListener('click', function(){
        shoes.forEach(item => item.classList.remove('active__show'));
        this.classList.add('active__show');

        if (this.id === 'show-1') {
            shoe.src = 'images/image-product-1.jpg'
        } else if (this.id === 'show-2') {
            shoe.src = 'images/image-product-2.jpg'
        } else if (this.id === 'show-3') {
            shoe.src = 'images/image-product-3.jpg'
        } else {
            shoe.src = 'images/image-product-4.jpg'
        }
    })
})

burgerBtn.addEventListener('click', function(){
    const navList = document.querySelector('.lists');
    if (navList.classList.toggle('active__menu')) {
        this.src = 'images/icon-close.svg'
        this.style.position = 'fixed' 
    } else {
        this.src = 'images/icon-menu.svg';
        this.style.position = 'relative' 
    }
})




function showCartCard() {
    if (!switchCards) {
        document.querySelector('.header__cart').style.display = "flex";
        switchCards = true
    } else {
        document.querySelector('.header__cart').style.display = "none";
        switchCards = false
    }
}

cart.addEventListener('click', showCartCard);