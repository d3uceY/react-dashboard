import React from 'react'
import sun from '../../../../assets/sun.svg'
import bell from '../../../../assets/bell.svg'
import triangle from '../../../../assets/triangle.svg'
import FirstSection from '../FirstSection'

//taskbar css is in FirstSection css

export default function Taskbar() {
    return (
        <div className='flex items-center border taskbar max-w-[550px] justify-between ml-auto'>
            <div className='flex items-center '>
                <img className='w-4' src={sun} alt={`this is the ${sun}`} />
                <p className='text-dark-grey ml-3 text-sm'>US stock market opens in 3 hours</p>
            </div>

            <div className='flex items-center gap-7'>
                <div className='main-wallet-container flex items-center'>
                    <p className='text-sm'>Main Wallet</p>
                    <img className='w-2 ml-5 rotate-180' src={triangle} alt={`this is a ${triangle}`} />
                </div>
                <div className='bell-container relative'>
                    <img src={bell} alt={`this is ${bell}`} />
                </div>
                <div className='bg-very-dark-blue text-white rounded-full w-[50px] h-[50px] flex justify-center items-center'>
                    <p className='text-3xl font-light'>+</p>
                </div>
            </div>
        </div>
    )
}
