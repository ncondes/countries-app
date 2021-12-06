import { useContext } from 'react';
import { ThemeContext } from '../router/AppRouter';
import '../scss/Loading.scss';


export const Loading = () => {

    const { isDarkTheme } = useContext( ThemeContext );

    return (
        <div className='mt-28 flex justify-center items-center'>
            <div className='lds-ellipsis'>
                <div className={ isDarkTheme ? 'bg-White' : 'bg-Very_Dark_Blue' }></div>
                <div className={ isDarkTheme ? 'bg-White' : 'bg-Very_Dark_Blue' }></div>
                <div className={ isDarkTheme ? 'bg-White' : 'bg-Very_Dark_Blue' }></div>
                <div className={ isDarkTheme ? 'bg-White' : 'bg-Very_Dark_Blue' }></div>
            </div>
        </div>
    )
}
