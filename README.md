Currency Converter
==============

A library that convert amount to other currency with the rate of input date using exchangeratesapi.io API

## Installation
```bash
yarn add @snushof-ab/currency-converter
```

## Usage
```js
import currencyConverter from '@snushof-ab/currency-converter';
const res = await currencyConverter("2011-06-03", "USD", 100, "CAD");

console.log(res);
```

## Inputs
- `date` - (String) base date
- `currencyFrom` - (String) base currency code
- `amount` - (Number) base amount
- `currencyTo` - (String) conversion currency code


## Output
- JSON formatted object with input data and converted base_amount
- example
`
{ date: '2011-06-03',
  base_currency: 'USD',
  base_amount: 100,
  conversion_currency: 'CAD',
  conversion_amount: 97.85 }
`

## Test
```bash
yarn test
```
