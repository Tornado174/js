'use strict';
// 1. получите все кнопки и сохраните в переменную

// 1.1 затем проитерируйтесь по кнопкам и каждой из
// них добавьте обработчик клика - функцию handleClick

let btn = document.querySelectorAll('button');

btn.forEach(function(elem){
    elem.addEventListener('click', function(){
        handleClick(elem);
    });
})



/**
 * Функция обрабатывает клик по кнопке в карточке товара и попеременно вызывает
 * функции для показа или скрытия текста о товаре.
 * @param {MouseEvent} clickedButtonEvent 
 */
function handleClick(clickedButtonEvent) {
    const cardNode = clickedButtonEvent.parentNode;

    // 2. из объекта события получите ссылку на .product и
    // сохраните в переменную:
    // const cardNode = ;

    // 3. создайте литерал объекта со следующими свойствами:
    const card = {
        // wrap: , // здесь элемент с классом .product
        // img: , // здесь картинка внутри .product
        // productName: , // здесь .productName, который внутри .product
        // button: , // здесь button, который внутри .product
        wrap: cardNode,
        img: cardNode.getElementsByTagName('img')[0],
        productName: cardNode.getElementsByClassName('productName')[0],
        button: cardNode.getElementsByTagName('button')[0],
    };

    let txtBtn = card.button.innerText;

    // 4. получаем текст на кнопке, которая внутри .product
    
    if (txtBtn == 'Подробнее'){
        showMoreText(card);
    } else if (txtBtn == 'Отмена'){
        hideMoreText(card);
    }
    
    // if () { // 4.1 проверяем равняется ли этот текст строке "Подробнее"
    //     // 4.2 если да, то передаем объект card в функцию showMoreText
    //     showMoreText(card);
    // } else if () { // 4.3 проверяем равняется ли текст на кнопке строке "Отмена"
    //     // 4.4 если да, то передаем объект card в функцию hideMoreText
    //     hideMoreText(card);
    // }
}

/**
 * Функция скрывает текст с описанием товара.
 * @param {Object} card 
 * @param {HTMLDivElement} card.wrap
 * @param {HTMLImageElement} card.img
 * @param {HTMLDivElement} card.productName
 * @param {HTMLButtonElement} card.button
 */
function hideMoreText(card) {
    // 5. картинке внутри .product ставим стиль display: block
    
    // 5.1 внутри .product находим элемент с классом .desc и удаляем его
    
    // 5.2 кнопке, которая внутри .product ставим текст "Подробнее"
    card.img.style.display='block';
    card.wrap.getElementsByClassName('desc')[0].remove();
    card.button.innerHTML = 'Подробнее';

    
}

/**
 * Функция показывает текст с описанием товара.
 * @param {Object} card 
 * @param {HTMLDivElement} card.wrap
 * @param {HTMLImageElement} card.img
 * @param {HTMLDivElement} card.productName
 * @param {HTMLButtonElement} card.button 
 */
function showMoreText(card) {
    // 6. картинке внутри .product ставим display: none
    
    // 6.1 сохраняем произвольный текст в переменную
    
    // 6.2 внутри .product есть .productName, после него вставляем div.desc и текстом из переменной из п. 6.1
    
    // 6.3 внутри .product у кнопки текст ставим "Отмена"
    
    card.img.style.display='none';
    let txt = 'Hello world';
    let tmp = card.wrap.appendChild(document.createElement('div'));
    tmp.classList.add('desc');
    tmp.innerHTML = txt;
    card.wrap.insertBefore(tmp, card.img);
    card.button.innerText = 'Отмена';
}