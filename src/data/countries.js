import { useFetch } from '../hooks/useFetch';


export const countries = () => {

    const { data, loading } = useFetch( 'https://restcountries.com/v2/all' );
    return {
        data,
        loading,
    }

}