

export const getLanguages = ( countryLanguages = [] ) => {
    const currenciesArray = [];
    countryLanguages.map( currency => {
        currenciesArray.push( currency.name );
    });
    return currenciesArray.join(', ');
}