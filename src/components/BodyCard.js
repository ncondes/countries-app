import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../router/AppRouter';
import { numberWithComas } from '../helpers/numberWithComas';
import { searchForCountryAlpha } from '../helpers/searchForCountryAlpha';


export const BodyCard = ({ flags, name, population, region, capital, alpha3Code }) => {

    const { bgColor, fontColor } = useContext( ThemeContext );

    return (
        <Link
            to={`/country/${ alpha3Code }`}
            className={` ${ bgColor } ${ fontColor } rounded-md shadow-md`}
        >
            <div className='h-40 w-full'>
                <img
                    className='h-full w-full object-cover rounded-t-md'
                    src={ flags.svg }
                    alt={`${ name } flag`}
                />
            </div>
            <div className='pb-10 pt-7 px-6'>
                <h3 className='font-bold mb-6 text-base'>{ name }</h3>
                <p className='font-bold my-1'>Population: <span className='font-light'>{ numberWithComas( population ) }</span></p>
                <p className='font-bold my-1'>Region: <span className='font-light'>{ region }</span></p>
                <p className='font-bold my-1'>Capital: <span className='font-light'>{ capital }</span></p>
            </div>
        </Link>
    )
}
