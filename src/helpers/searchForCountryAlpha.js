import { countries } from '../data/countries';


export const searchForCountryAlpha = ( id ) => {
    const { data } = countries();
    if( data ) {
        return data.find( country => country.alpha3Code === id )
    }
}