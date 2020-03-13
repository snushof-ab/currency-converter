const expect = require('chai').expect;
const nock = require('nock');
const currencyConverter = require('../index');
const response = require('./response');

describe('Currency Converter Tests', () => {
  it('Should convert USD100 to CAD amount with rate of 2011-06-03', () => {
    currencyConverter(100, "USD", "CAD", "2011-06-03")
      .then(response => {
        expect(response.date).to.equal("2011-06-03");
        expect(response.base_currency).to.equal("USD");
        expect(response.base_amount).to.equal(100);
        expect(response.conversion_currency).to.equal("CAD");
        expect(response.conversion_amount).to.equal(97.8534);
      })
  });

  it('Should convert GBP303 to SEK amount with rate of 2007-07-12', () => {
    currencyConverter(303, "GBP", "SEK", "2007-07-12")
      .then(response => {
        expect(response.date).to.equal("2007-07-12");
        expect(response.base_currency).to.equal("GBP");
        expect(response.base_amount).to.equal(303);
        expect(response.conversion_currency).to.equal("SEK");
        expect(response.conversion_amount).to.equal(4085.0279);
      })
  });

  it('Should convert EUR5 to PLN amount with rate of 2004-08-07', () => {
    currencyConverter(5, "EUR", "PLN", "2004-08-07")
      .then(response => {
        expect(response.date).to.equal("2004-08-07");
        expect(response.base_currency).to.equal("EUR");
        expect(response.base_amount).to.equal(5);
        expect(response.conversion_currency).to.equal("PLN");
        expect(response.conversion_amount).to.equal(22.01);
      })
  });

  it('Should convert ZAR132 to TRY amount with rate of 2017-02-09', () => {
    currencyConverter(132, "ZAR", "TRY", "2017-02-09")
      .then(response => {
        expect(response.date).to.equal("2017-02-09");
        expect(response.base_currency).to.equal("ZAR");
        expect(response.base_amount).to.equal(132);
        expect(response.conversion_currency).to.equal("TRY");
        expect(response.conversion_amount).to.equal(36.352);
      })
  });

  it('Should convert currency in lower case like usd', () => {
    currencyConverter(100, "usd", "cad", "2011-06-03")
      .then(response => {
        expect(response.date).to.equal("2011-06-03");
        expect(response.base_currency).to.equal("USD");
        expect(response.base_amount).to.equal(100);
        expect(response.conversion_currency).to.equal("CAD");
        expect(response.conversion_amount).to.equal(97.8534);
      })
  });

  describe('Currency Converter Tests with Mocks', () => {
    beforeEach(() => {
      nock('https://exchangeratesapi.io/api')
        .get('/2011-06-03?base=USD')
        .reply(200, response);
    });

    it('Should convert USD100 to CAD amount with rate of 2011-06-03', () => {
      currencyConverter(100, "USD", "CAD", "2011-06-03")
        .then(response => {
          expect(response.date).to.equal("2011-06-03");
          expect(response.base_currency).to.equal("USD");
          expect(response.base_amount).to.equal(100);
          expect(response.conversion_currency).to.equal("CAD");
          expect(response.conversion_amount).to.equal(97.8534);
        })
    })
  });

});
