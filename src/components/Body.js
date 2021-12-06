import { useContext, useEffect, useState } from 'react';
import { ThemeContext } from '../router/AppRouter';
import { BodyCard } from './BodyCard';
import { Filters } from './Filters';
import { Header } from './Header';
import { useFetch } from '../hooks/useFetch';
import { Loading } from './Loading';
import { BodyGrid } from './BodyGrid';
import { countries } from '../data/countries';


export const Body = () => {

    
    const { isDarkTheme } = useContext( ThemeContext );
    
    const { data, loading } = countries();
    
    const [ countriesDisplayed, setCountriesDisplayed ] = useState( data );

    useEffect(() => {
        setCountriesDisplayed( data );
    }, [ data ])

    return (
        <div className={`${ isDarkTheme ? 'bg-Medium_Dark_Blue' : 'bg-Very_Light_Gray'} relative flex flex-col min-h-screen`}>
            <Header />
            <div className='w-full h-full px-4 py-6 lg:py-12 container mx-auto'>
                <Filters
                    data={ data }
                    countriesDisplayed={ countriesDisplayed }
                    setCountriesDisplayed={ setCountriesDisplayed }
            />
                {
                    ( loading )
                        ? <Loading />
                        : (
                            ( countriesDisplayed )
                                && <BodyGrid countriesDisplayed={ countriesDisplayed }/>
                        )
                }
            </div>
        </div>
    )
}
