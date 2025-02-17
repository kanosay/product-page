const cart = document.querySelector('.header__goods');
const burgerBtn = document.querySelector('.header__burger');
const shoes = document.querySelectorAll('.item__shoe');
const symbols = document.querySelectorAll('.add__num');
const addBtn = document.querySelector('.price__button')

let switchCards;
let counter = 0;

symbols.forEach(function (e) {
    e.addEventListener('click', function () {
        if (this.id === 'item-minus') {
            --counter
        } else {
            ++counter
        }
        document.querySelector('.add__title').innerHTML = `${counter}`
    })
})

shoes.forEach(function (elem) {
    const shoe = document.querySelector('.shoe')
    elem.addEventListener('click', function () {
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

burgerBtn.addEventListener('click', function () {
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

addBtn.addEventListener('click', function () {
    if (counter) {
        document.querySelector('.cart__notices').style.display = 'inline-block'
        document.querySelector('.cart__notices').innerHTML = `
            ${counter}
        `;
        document.querySelector('.cart__item').innerHTML = `
        <img class="cart__shoe" src="images/image-product-1-thumbnail.jpg" alt="">
        <div class="cart__all">
            <h2>Fall Limited Edition Sneakers</h2>
            <p>$125.00 x ${counter}, <span>$${125.00 * counter}.00</span></p>
        </div>
        <img class="cart__delete" src="images/icon-delete.svg" alt="">
        `
        const btnDelete = document.querySelector('.cart__delete');
        btnDelete.addEventListener('click', function () {
            document.querySelector('.cart__item').innerHTML = `
            <h3 class="cart__empty">Your cart is empty</h3>
            `;
            document.querySelector('.cart__notices').style.display = 'none'
        })
    }
})


const images = document.querySelectorAll('.slider-img');
const controlls = document.querySelectorAll('.controlls');
let imageIndex = 0;

function show(index) {
    images[imageIndex].classList.remove('active');
    images[index].classList.add('active');
    imageIndex = index;
}

controlls.forEach((e) => {
    e.addEventListener('click', () => {
        if (event.target.classList.contains('prev')) {
            let index = imageIndex - 1;

            if (index < 0) {
                index = images.length - 1;
            }

            show(index);
        } else if (event.target.classList.contains('next')) {
            let index = imageIndex + 1;
            if (index >= images.length) {
                index = 0;
            }
            show(index);
        }
    })
})

show(imageIndex);





cart.addEventListener('click', showCartCard);