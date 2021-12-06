

export const getCurrencies = ( countryCurrencies = [] ) => {
    const currenciesArray = [];
    countryCurrencies.map( currency => {
        currenciesArray.push( currency.name );
    });
    return currenciesArray.join(', ');
}