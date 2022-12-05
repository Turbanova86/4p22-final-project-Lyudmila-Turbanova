'use strict';

const container = document.querySelector('.container');
// const searchValue = document.querySelector('.tools__search').value;

let goods;
async function fetchData() {
    const response = await fetch('https://api.npoint.io/cb648043f49f676ca672');
    const json = await response.json();

    const result = json.products;
    goods = result;

    result.forEach((item) => {
        const itemContainer = document.createElement('a');
        itemContainer.href = `product.html?id=${item.id}`;
        itemContainer.classList.add('item-container');

        const img = document.createElement('img');
        img.src = item.image;
        img.classList.add('item-img');

        const title = document.createElement('h2');
        title.textContent = item.title;
        title.classList.add('item-title');

        const desc = document.createElement('h4');
        desc.textContent = item.previewDescription;
        desc.classList.add('item-desc');

        const rating = document.createElement('h6');
        rating.textContent = item.rating;
        rating.classList.add('item-rating');

        const weight = document.createElement('h4');
        weight.textContent = item.weight;
        weight.classList.add('item-weight');

        const price = document.createElement('h3');
        price.textContent = item.price;
        price.classList.add('item-price');

        const button = document.createElement('button');
        button.textContent = 'Купить';
        button.classList.add('button');

        button.addEventListener('click', (event) => {
            event.preventDefault();
            event.stopPropagation();
            let resultFromLocalStorage = JSON.parse(localStorage.getItem('item'));
            if (!resultFromLocalStorage || !resultFromLocalStorage.length) {
                resultFromLocalStorage = [];
            }
            resultFromLocalStorage.push(item);
            const resultString = JSON.stringify(resultFromLocalStorage);
            localStorage.setItem('item', resultString);
            console.log(localStorage);

            button.textContent = 'Удалить';
        });

        itemContainer.appendChild(img);
        itemContainer.appendChild(title);
        itemContainer.appendChild(desc);
        itemContainer.appendChild(rating);
        itemContainer.appendChild(weight);
        itemContainer.appendChild(price);
        itemContainer.appendChild(button);

        container.appendChild(itemContainer);
    });
}

fetchData();


        const buttonFind = document.querySelector('.find');
        const searchValue = document.querySelector('.tools__search').value;

        buttonFind.addEventListener('click', (event) => {
            event.preventDefault();

            console.log(
            goods.filter((item) => {
                const productTitle = (item.title).toLowerCase();
                // console.log(searchValue);
                return (
                    productTitle.includes(searchValue.toLowerCase())
                )
            })
            )
            const arr = [''];

            const item = {
              
            }
            
            // FindOnPage();
        })
        
 

        let message = document.querySelector('.subscription-message');
        let form = document.querySelector('.subscription');

        form.onsubmit = function(event) {
        event.preventDefault();
        message.textContent = 'Форма отправлена!';
        };