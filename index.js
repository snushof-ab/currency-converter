/**
 * Currency conversion module by applying historical exchange rate using exchangeratesapi.io API
 * @param {string} date
 * @param {string} currencyFrom - base currency
 * @param {number} amount
 * @param {string} currencyTo - conversion currency
 * @return {object} JSON object with all input data and conversion amount by calculating using API
 */

const axios = require('axios');

module.exports = function (amount, currencyFrom, currencyTo, date) {
    let base_currency = (currencyFrom || '').toUpperCase();
    let conversion_currency = (currencyTo || '').toUpperCase();
    return axios
        .get(`https://api.exchangeratesapi.io/${date}?base=${base_currency}`)
        .then(json => json.data)
        .then(function (data) {
            var result = {};
            if (data.rates.hasOwnProperty(conversion_currency)) {
                let conversion_amount = amount * data.rates[conversion_currency];
                let fomatted_conversion_amount = parseFloat(conversion_amount.toFixed(4));
                result = {
                    "date": date,
                    "base_currency": base_currency,
                    "base_amount": amount,
                    "conversion_currency": conversion_currency,
                    "conversion_amount": fomatted_conversion_amount
                }
            } else {
                console.log('No conversion currency exist');
            }
            return result
        })
        .catch(error => console.log(error))
};
