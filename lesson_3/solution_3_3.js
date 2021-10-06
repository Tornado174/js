'use strict'

const prod = [
    {
        id: 3,
        price: 200,
    },
    {
        id: 4,
        price: 900,
    },
    {
        id: 1,
        price: 1000,
    },
];

prod.forEach(function(item){
    item['price'] *= 0.85
})

console.log(prod)
