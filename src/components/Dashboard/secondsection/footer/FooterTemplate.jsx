import React from 'react'

export default function FooterTemplate(props) {

    const { firstHeading, secondHeading, price, secondCost } = props.data
    return (
        <div className='flex justify-between items-center'>
            <div className='flex flex-col  gap-4'>
                <div className='uppercase text-dark-grey text-xs'>{firstHeading}</div>
                <div className= {price < 1 ? 'text-red font-semibold' : 'text-green font-semibold'}> ${price}</div>
            </div>
            <div className='text-end flex flex-col  gap-4'>
                <div className='uppercase text-dark-grey text-xs'>{secondHeading}</div>
                <div className= {secondHeading === 'total gain' && secondCost > 1 ? 'text-green font-semibold' : 'font-semibold'}>${secondCost}</div>
            </div>
        </div>
    )
}
