

export const searchForCountryRegion = ( data, filter ) => {
    if ( filter === 'All') {
        return data
    } else {
        return data.filter( country => country.region === filter )
    }
}
