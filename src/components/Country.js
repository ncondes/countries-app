import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../router/AppRouter';
import { Header } from './Header';


export const Country = () => {

    const { isDarkTheme, bgColor, fontColor } = useContext( ThemeContext );

    const borderCountries = [
        'France',
        'Germany',
        'Netherlands',
    ]

    return (
        <div className={`${ isDarkTheme ? 'bg-Medium_Dark_Blue' : 'bg-Very_Light_Gray'} flex flex-col`}>
            <Header />
            <div className={`${ fontColor } px-7 py-10`}>

                {/* Back Btn */}
                <Link
                    to='/'
                    className={`${ bgColor } inline-block shadow-md py-2 px-6 rounded-md text-center`}
                >
                    <i className='fas fa-long-arrow-alt-left mr-2'></i>
                    <span>Back</span>
                </Link>

                <div className='h-56 w-full bg-red-500 mt-16 mb-12'>
                    <img />
                </div>

                <h2 className='font-bold mb-6 text-xl'>Belgium</h2>
                <p className='font-bold my-3'>Native Name:<span className='font-light'> Belgie</span></p>
                <p className='font-bold my-3'>Population:<span className='font-light'> 323,947,000</span></p>
                <p className='font-bold my-3'>Region:<span className='font-light'> Europe</span></p>
                <p className='font-bold my-3'>Sub Region:<span className='font-light'> Western Europe</span></p>
                <p className='font-bold mt-3 mb-12'>Capital:<span className='font-light'> Bruseels</span></p>

                <p className='font-bold my-3'>Top Level Domain:<span className='font-light'> .be</span></p>
                <p className='font-bold my-3'>Currencies:<span className='font-light'> Euro</span></p>
                <p className='font-bold mt-3 mb-12'>Languages:<span className='font-light'> Dutch, French, German</span></p>

                <h4 className='text-base font-bold'>Border Countries:</h4>
                
                <div className='grid grid-cols-3 gap-3 mt-5'>
                    {
                        borderCountries.map( borderCountry => (
                            <Link
                                to='/'
                                key={ borderCountry }
                                className={`${ bgColor } text-xs inline-block w-24 py-2 px-1 rounded-md text-center shadow-md transition duration-300 transform hover:scale-105`}
                            >
                                <span>{ borderCountry }</span>
                            </Link>
                        ))
                    }
                </div>

            </div>
        </div>
    )
}
