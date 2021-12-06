import { useContext, useEffect } from 'react';
import { ThemeContext } from '../router/AppRouter';
import { useForm } from '../hooks/useForm';
import { searchForCountryName } from '../helpers/searchForCountryName';
import { searchForCountryRegion } from '../helpers/searchForCountryRegion';


export const Filters = ({ data, setCountriesDisplayed }) => {

    const { isDarkTheme, bgColor, fontColor, isFilterOpen, setIsFilterOpen } = useContext( ThemeContext );

    const regions = [
        'All',
        'Africa',
        'Americas',
        'Asia',
        'Europe',
        'Oceania',
    ];

    const handleFilter = () => {
        setIsFilterOpen( !isFilterOpen )
    }

    const [ formValues, handleInputChange, reset ] = useForm({ nameFilter: '' });
    const { nameFilter } = formValues;

    useEffect(() => {

        if ( nameFilter ) {
            setCountriesDisplayed( searchForCountryName( data, nameFilter ) );
        } else {
            setCountriesDisplayed( data )
        }

    }, [ nameFilter ]);

    const handleRegionFilter = ( region ) => {

        setIsFilterOpen( false );
        setCountriesDisplayed( searchForCountryRegion( data, region ) );

    }

    return (
        <div className={`${ fontColor } relative flex flex-col lg:flex-row justify-between sm:px-10`}>

            {/* Search Input */}
            <form
                onSubmit={ (e) => { e.preventDefault() }}
                className={`${ bgColor } px-8 py-4 rounded-md lg:w-2/5 mb-10 lg:mb-0 shadow-md`}
            >
                <i className={`fas fa-search mr-6 ${ !isDarkTheme && 'text-Dark_Gray' }`}></i>
                <input
                    type='text'
                    className={`${ bgColor } outline-none w-9/12 ${ isDarkTheme ? 'placeholder-White' : 'placeholder-Dark_Gray' }`}
                    placeholder='Search for a country...'
                    autoComplete='off'
                    name='nameFilter'
                    onChange={ handleInputChange }
                />
            </form>

            {/* Filter Menu */}
            <div
                onClick={ handleFilter }
                className={`${ bgColor } relative px-8 py-4 rounded-md w-52 flex justify-between items-center shadow-md cursor-pointer`}
            >
                <span className='font-normal'>Filter by Region</span>
                <i className='fas fa-chevron-down'></i>

                {/* Toggle Filter Menu */}
                <div className={`${ bgColor } ${ isFilterOpen ? 'block' : 'hidden' } cursor-pointer absolute top-14 left-0 py-3 mt-1 rounded-md w-52 shadow-md`}>
                    {
                        regions.map( region => (
                            <p
                                onClick={ () => { handleRegionFilter( region ) } }
                                className={`py-2 px-8 transition duration-150 ${ isDarkTheme ? 'hover:bg-Medium_Dark_Blue' : 'hover:bg-Very_Light_Gray'}`}
                                key={ region }
                            >{ region }</p>
                        ))
                    }
                </div>
            </div>


        </div>
    )
}
