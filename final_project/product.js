'use strict';

const container = document.querySelector('.container');

async function fetchProduct() {
    const searchString = window.location.search.replace('?id=', '');
    const params = new URLSearchParams(searchString);   

    // const response = await fetch(`https://api.npoint.io/cb648043f49f676ca672/${params.get('id')}`);
    const response = await fetch('https://api.npoint.io/cb648043f49f676ca672');
    const json = await response.json();
    const result = json.products.filter(p => p.id === +searchString)[0];
  
    const itemContainer = document.createElement('div');
    itemContainer.classList.add('item-container');

    const img = document.createElement('img');
    img.src = result.image;
    img.classList.add('item-img');

    const title = document.createElement('h2');
    title.textContent = result.title;

    const price = document.createElement('h4');
    price.textContent = result.price;
    price.classList.add('item-price');

    const description = document.createElement('div');
    description.textContent = result.detailDescription;

    const button = document.createElement('button');
    button.textContent = 'Купить';
    button.classList.add('button');


    button.addEventListener('click', (event) => {
        event.preventDefault();
        event.stopPropagation();
        let resultFromLocalStorage = JSON.parse(localStorage.getItem(''));
        if (!resultFromLocalStorage || !resultFromLocalStorage.length) {
            resultFromLocalStorage = [];
        }
        resultFromLocalStorage.push();
        const resultString = JSON.stringify(resultFromLocalStorage);
        localStorage.setItem('item', resultString);
        console.log(localStorage);

        button.textContent = 'Удалить';
    });

    container.appendChild(itemContainer);
    itemContainer.appendChild(img);
    itemContainer.appendChild(title);
    itemContainer.appendChild(description);
    itemContainer.appendChild(price);
    itemContainer.appendChild(button);
}

fetchProduct();



const button = document.createElement('button');
        button.textContent = 'Добавить в корзину';

        button.addEventListener('click', () => {
            
            let resultFromLocalStorage = JSON.parse(localStorage.getItem('item'));
          
            resultFromLocalStorage.push(item);
            const resultString = JSON.stringify(resultFromLocalStorage);
            localStorage.setItem('item', resultString);
            console.log(localStorage);

        })