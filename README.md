Currency Converter
==============
A library that convert amount to other currency with the rate of input date using exchangeratesapi.io API

## Installation
```bash
yarn add @techhof-ab/currency-converter
```

## Usage
```js
import CurrencyConverter from '@snushof-ab/currency-converter';
const res = await CurrencyConverter(100, "USD", "CAD", "2011-06-03");

console.log(res);
```

## Inputs
- `amount` - (Number) base amount
- `currencyFrom` - (String) base currency code
- `currencyTo` - (String) conversion currency code
- `date` - (String) base date


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
