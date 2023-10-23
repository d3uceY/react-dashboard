import React from 'react'
import PortfolioHistory from './Templates/PortfolioHistory.jsx'
import { PortfolioData } from './Templates/TemplateData/PortfolioData.js'
import portfolioPicture from '../../../../assets/industries.png'

export default function Portfolio() {
    return (
        <div className='2xl:flex max-w-[1200px] mx-auto justify-between px-4'>
            <div className='w-full max-w-3xl mx-auto'>
                <p className='mb-4'>Portfolio Industry</p>
                <div className='2xl:grid-cols-3 md:grid  lg:grid-cols-2 md:grid-col-1 gap-4 mx-auto'>
                    {PortfolioData.map((data) =>
                        <PortfolioHistory data={data} key = {data.id} />
                    )}
                </div>
            </div>
            <div className=' w-fit mx-auto'>
                <div className='border-b border-black border-dashed w-fit ml-auto mb-4'>
                    <p>Per Industry</p>
                </div>
                <img src={portfolioPicture} alt={`this is ${portfolioPicture}`} />
            </div>
        </div>
    )
}
