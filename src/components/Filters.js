import { useContext } from 'react';
import { ThemeContext } from '../router/AppRouter';


export const Filters = () => {

    const { isDarkTheme, bgColor, fontColor, isFilterOpen, setIsFilterOpen } = useContext( ThemeContext );

    const regions = [
        'Africa',
        'America',
        'Asia',
        'Europe',
        'Oceania',
    ];

    const handleFilter = () => {
        setIsFilterOpen( !isFilterOpen )
    }



    return (
        <div className={`${ fontColor } relative`}>

            {/* Search Input */}
            <form className={`${ bgColor } px-8 py-4 rounded-md mb-10 shadow-md`}>
                <i className={`fas fa-search mr-6 ${ !isDarkTheme && 'text-Dark_Gray' }`}></i>
                <input
                    className={`${ bgColor } outline-none ${ isDarkTheme ? 'placeholder-White' : 'placeholder-Dark_Gray' }`}
                    placeholder='Search for a country...'
                    autoComplete='off'
                />
            </form>

            {/* Filter Menu */}
            <div
                onClick={ handleFilter }
                className={`${ bgColor } px-8 py-4 rounded-md w-52 flex justify-between items-center shadow-md cursor-pointer`}
            >
                <span className='font-normal'>Filter by Region</span>
                <i className='fas fa-chevron-down'></i>
            </div>

            {/* Toggle Filter Menu */}
            <div className={`${ bgColor } ${ isFilterOpen ? 'block' : 'hidden' } cursor-pointer absolute py-3 mt-1 rounded-md w-52 shadow-md`}>
                {
                    regions.map( region => (
                        <p
                            className={`py-2 px-8 transition duration-150 ${ isDarkTheme ? 'hover:bg-Medium_Dark_Blue' : 'hover:bg-Very_Light_Gray'}`}
                            key={ region }
                        >{ region }</p>
                    ))
                }
            </div>
        </div>
    )
}
