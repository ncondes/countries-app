import { useContext } from 'react';
import { ThemeContext } from '../router/AppRouter';



export const Header = () => {

    const { isDarkTheme, setIsDarkTheme, bgColor, fontColor } = useContext( ThemeContext );

    const handleTheme = () => {
        setIsDarkTheme( !isDarkTheme );
    };

    return (
        <div className={`${ bgColor } ${ fontColor } text-sm flex justify-between px-4 py-8 shadow-md`}>
            <p className='font-bold'>Where in the world?</p>
            <div
                onClick={ handleTheme }
                className='cursor-pointer transition duration-300 transform hover:scale-105'
            >
                <i className={`${ isDarkTheme ? 'fas fa-moon' : 'far fa-moon' }`}></i>
                <span> Dark Mode</span>
            </div>
        </div>
    )
}
