import { BodyCard } from './BodyCard';


export const BodyGrid = ({ countriesDisplayed }) => {
    return (
        <div className='w-full h-full grid gap-10 lg:gap-16 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-10 pb-14 pt-8 lg:pt-12'>
            {
                countriesDisplayed.map( country => (
                    <BodyCard
                        key={ country.name }
                        { ...country }
                    />
                ))
            }
        </div>
    )
}
