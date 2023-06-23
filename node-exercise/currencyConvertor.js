const CC = require('currency-converter-lt');
let currencyConverter = new CC({from:"USD", to:"NPR", amount:100});


currencyConverter.convert(1).then((response) => {
    console.log(response) //or do something else
});