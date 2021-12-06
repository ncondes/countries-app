import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Body } from '../components/Body';
import { Country } from '../components/Country';


export const ThemeContext = React.createContext();

export const AppRouter = () => {

    const [ isDarkTheme, setIsDarkTheme ] = useState( true );
    const [ isFilterOpen, setIsFilterOpen ] = useState( false );

    const bgColor = ( isDarkTheme ? 'bg-Dark_Blue' : 'bg-White' );
    const fontColor = ( isDarkTheme ? 'text-White' : 'text-Very_Dark_Blue' )


    return (
        <ThemeContext.Provider value={{
            isDarkTheme,
            setIsDarkTheme,
            bgColor,
            fontColor,
            isFilterOpen,
            setIsFilterOpen,
        }}>

            <BrowserRouter>
                <Routes>
                    
                    <Route path='/' element={ <Body /> }/>
                    <Route path='country/:id' element={ <Country /> }/>
                    <Route path='/*' element={ <Body /> }/>

                </Routes>
            </BrowserRouter>

        </ThemeContext.Provider>
    )
}
