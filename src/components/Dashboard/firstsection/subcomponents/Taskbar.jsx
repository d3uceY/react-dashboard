import React from 'react'
import sun from '../../../../assets/sun.svg'
import bell from '../../../../assets/bell.svg'
import triangle from '../../../../assets/triangle.svg'
import FirstSection from '../FirstSection'
import menu from '../../../../assets/menu.svg'
import Navbar from '../../../sidebar/Navbar.jsx'
import { useState } from 'react'

//taskbar css is in FirstSection css

export default function Taskbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        console.log('sup')
        setIsOpen(!isOpen);
    }
     
    return (
        <>
            <div className=  {`relative ${isOpen ? 'top-[6rem]' : 'top-[-100vh] transition-all'}`}>
                <Navbar />
            </div>
            <div className='flex items-center taskbar xl:max-w-[550px] justify-between ml-auto py-5 px-4 '>
                <div className='flex items-center'>
                    <img className='w-4' src={sun} alt={`this is the ${sun}`} />
                    <p className='text-dark-grey ml-3 text-sm'>US stock market opens in 3 hours</p>
                </div>

                <div className='xl:flex xl:items-center xl:gap-7 hidden'>
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
                <div className='relative z-10 xl:hidden cursor-pointer' onClick={toggleNavbar}>
                    <img className='w-[50px]' src={menu} alt={`this is ${menu}`} />
                </div>
            </div>
        </>
    )
}
