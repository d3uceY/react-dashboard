import React from 'react'
import '../../secondsection.css'

export default function PortfolioHistory(props) {
    const { date, price, stat, statBracket } = props.data
    return (
        <div className='border-2 flex justify-between flex-col min-h-[300px] p-5 pb-7 rounded-3xl'>
            <div className='font-bold date relative'>{date}</div>
            <div className={stat === 143.56 ? 'magicpattern' : 'none'}></div>
            <div>
                <div>Portfolio Value</div>
                <div className='text-3xl'>{price}</div>
                <div className={stat < 1 ? 'text-red' : 'text-green'}>
                    <p className={stat < 1 ? 'inline-block rotate-180 mr-1' : 'inline mr-1'}>&uarr;</p>
                    {stat} {statBracket}
                </div>
            </div>
        </div>
    )
}
