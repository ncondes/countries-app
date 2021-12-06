import { useContext } from 'react';
import { ThemeContext } from '../router/AppRouter';



export const Header = () => {

    const { isDarkTheme, setIsDarkTheme, bgColor, fontColor } = useContext( ThemeContext );

    const handleTheme = () => {
        setIsDarkTheme( !isDarkTheme );
    };

    return (
        <div className={`${ bgColor } ${ fontColor } text-sm px-4 sm:px-0 py-8 shadow-md`}>
            <div className='container mx-auto flex justify-between sm:px-14'>

                <p className='font-bold lg:text-lg'>Where in the world?</p>
                <div
                    onClick={ handleTheme }
                    className='cursor-pointer transition duration-300 transform hover:scale-105'
                >
                    <i className={`${ isDarkTheme ? 'fas fa-moon' : 'far fa-moon' }`}></i>
                    <span> Dark Mode</span>
                </div>
            </div>
        </div>
    )
}
