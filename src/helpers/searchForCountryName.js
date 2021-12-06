

export const searchForCountryName = ( data, filter ) => (
    data.filter( country => country.name.toLowerCase().includes( filter.toLowerCase() ) )
)