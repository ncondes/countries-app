import { useContext } from 'react';
import { ThemeContext } from '../router/AppRouter';
import { BodyCard } from './BodyCard';
import { Filters } from './Filters';
import { Header } from './Header';


export const Body = () => {

    const { isDarkTheme } = useContext( ThemeContext );

    return (
        <div className={`${ isDarkTheme ? 'bg-Medium_Dark_Blue' : 'bg-Very_Light_Gray'} flex flex-col`}>
            <Header />
            <div className={`px-4 py-6`}>
                <Filters />
                <div className='grid gap-10 grid-cols-1 px-10 pb-14 pt-8'>
                    <BodyCard />
                </div>
            </div>
        </div>
    )
}
