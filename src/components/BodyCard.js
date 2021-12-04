import { useContext } from 'react';
import { ThemeContext } from '../router/AppRouter';


export const BodyCard = () => {

    const { bgColor, fontColor } = useContext( ThemeContext );

    return (
        <div className={` ${ bgColor } ${ fontColor } rounded-md shadow-md`}>
            <div className='h-40 w-full bg-red-300 rounded-t-md'>
                <img />
            </div>
            <div className='pb-10 pt-7 px-6'>
                <h3 className='font-bold mb-6 text-base'>United States of America</h3>
                <p className='font-bold my-1'>Population:<span className='font-light'> 323,947,000</span></p>
                <p className='font-bold my-1'>Region:<span className='font-light'> Americas</span></p>
                <p className='font-bold my-1'>Capital:<span className='font-light'> Washington. D.C.</span></p>
            </div>
        </div>
    )
}
