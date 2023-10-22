import React from 'react'
import apple from '../../../../assets/apple.svg'
import { FooterData } from './footerdata/FooterData'
import FooterTemplate from './FooterTemplate.jsx'
import './footer.css'

export default function Footer() {
    return (
        <div className='grid-cols-4 grid gap-4 mt-[4rem]'>
            <div className='flex justify-between'>
                <div className='flex flex-col gap-4'>
                    <p className='uppercase text-dark-grey text-xs'>symbol</p>
                    <div className='flex items-center gap-3'>
                        <div className='bg-grey h-9 w-9 flex justify-center items-center rounded-full apple-icon-container relative'>
                            <img src={apple} alt={`this is ${apple}`} />
                        </div>
                        <div className='uppercase font-bold'>aapl</div>
                    </div>
                </div>
                <div className='text-end flex flex-col gap-4'>
                    <div className='uppercase text-dark-grey text-xs'>price</div>
                    <div className='font-semibold'>= $ 234.00</div>
                </div>
            </div>
            {FooterData.map((data) =>
                <FooterTemplate data={data} />
            )}
        </div>
    )
}
