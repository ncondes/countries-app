import { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ThemeContext } from '../router/AppRouter';
import { Header } from './Header';
import { searchForCountryAlpha } from '../helpers/searchForCountryAlpha';
import { Loading } from './Loading';
import { getCurrencies } from '../helpers/getCurrencies';
import { getLanguages } from '../helpers/getLanguages';
import { numberWithComas } from '../helpers/numberWithComas';


export const Country = () => {

    const params = useParams();

    const { isDarkTheme, bgColor, fontColor } = useContext( ThemeContext );

    const country = searchForCountryAlpha( params.id );

    return (
        <div className={`${ isDarkTheme ? 'bg-Medium_Dark_Blue' : 'bg-Very_Light_Gray'} flex flex-col min-h-screen`}>
            <Header />
            <div className={`${ fontColor } container mx-auto px-6 lg:px-14 py-10`}>

                {/* Back Btn */}
                <Link
                    to='/'
                    className={`${ bgColor } inline-block shadow-md py-2 px-6 rounded-md text-center`}
                >
                    <i className='fas fa-long-arrow-alt-left mr-2'></i>
                    <span>Back</span>
                </Link>

                {
                    country
                        ? <div className='grid lg:place-items-center grid-cols-1 lg:grid-cols-2 lg:gap-16 xl:gap-32'>

                            <div className='h-56 lg:h-80 xl:h-100 w-full mt-16 mb-12'>
                                <img
                                    className='h-full w-full object-cover'
                                    src={ country.flags.svg }
                                    alt={`${ name } flag`}
                                />
                            </div>

                            <div>
                                <h2 className='font-bold mb-6 text-xl lg:text-2xl'>{ country.name }</h2>
                                <div className='lg:grid lg:grid-cols-2 lg:gap-12 xl:gap-28'>
                                    <div>
                                        <p className='font-bold my-3'>Native Name:<span className='font-light'> { country.nativeName }</span></p>
                                        <p className='font-bold my-3'>Population:<span className='font-light'> { numberWithComas( country.population ) }</span></p>
                                        <p className='font-bold my-3'>Region:<span className='font-light'> { country.region }</span></p>
                                        <p className='font-bold my-3'>Sub Region:<span className='font-light'> { country.subregion }</span></p>
                                        <p className='font-bold mt-3 mb-12'>Capital:<span className='font-light'> { country.capital }</span></p>
                                    </div>
                                    
                                    <div>
                                        <p className='font-bold my-3'>Top Level Domain:<span className='font-light'> { country.topLevelDomain }</span></p>
                                        <p className='font-bold my-3'>Currencies:<span className='font-light'> { getCurrencies( country.currencies ) }</span></p>
                                        <p className='font-bold mt-3 mb-12'>Languages:<span className='font-light'> { getLanguages( country.languages )}</span></p>
                                    </div>
                                </div>

                                <div className='lg:flex'>
                                    <h4 className='text-base font-bold'>Border Countries:</h4>
                                    <div className='grid grid-cols-3 gap-3 mt-5 lg:mt-0 lg:ml-4'>
                                        {
                                            country.borders?.map( borderCountry => (
                                                <Link
                                                    to={`/country/${ borderCountry }`}
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

                        </div>
                        : <Loading />
                }

            </div>
        </div>
    )
}
