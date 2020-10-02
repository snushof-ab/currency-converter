declare function convertor(amount: number, currencyFrom: string, currencyTo: string, date: string): Promise<{
    date: string,
    base_currency: string,
    base_amount: number,
    conversion_currency: string,
    conversion_amount: number
}>;

export default convertor;
