import React from 'react'
import user from '../../../../assets/mobile-user.svg'
import arrow from '../../../../assets/arrow.svg'
import dashboardchart from '../../../../assets/dashboard-chart.svg'
import arrowup from '../../../../assets/arrow-up.svg'


// css is in firstsection css
export default function FirstSectionDashBoard() {
    return (
        <div className='relative z-10 xl:flex gap-9 max-w-[1200px] justify-between mx-auto mt-[4rem] px-3'>
            <div className='shadow-md mx-auto max-w-[450px] first-box relative z-10 lg:max-w-[450px] min-w-[350px] pt-8 pb-6 px-4 bg-white rounded-3xl'>
                <h2 className='text-2xl text-very-dark-blue mb-5 text-center'>Upgrade your Account</h2>
                <img className='absolute userimage' src={user} alt={`this is ${user}`} />
                <p className='text-dark-grey mb-10 w-1/2 ml-auto'>Access many other features and helpful insights.</p>
                <div className='ml-auto border w-[50px] h-[50px] rounded-md bg-very-dark-blue hover:bg-dark-blue flex justify-center align-center'>
                    <img className='w-[25px]' src={arrow} alt={`this is ${arrow}`} />
                </div>
            </div>

            <div className='shadow-md bg-white max-w-[450px] xl:max-w-[700px] mx-auto xl:max-w-2xl p-6 rounded-3xl'>
                <div className='flex justify-between'>
                    <div className='text-dark-grey  flex items-center z-10 max-w-[200px] w-full justify-between'>
                        {secondDashboardData.map((data) =>
                            <SecondDashboardTemplate data={data} />
                        )}
                    </div>
                    <div className='border-black border-2 w-[20px] h-[20px] rounded-full flex justify-center items-center font-bold'>
                        $
                    </div>
                </div>
                <div className='xl:flex justify-between gap-3 mt-2'>
                    <div>
                        <img src={dashboardchart} alt={`this is ${dashboardchart}`} />
                    </div>
                    <div className=''>
                        <div>
                            <p className='font-light'>Portfolio Value</p>
                            <p className=' text-3xl'>$ 9 864.34</p>
                            <div className='flex items-center'>
                                <img className='w-[15px]' src={arrowup} alt={`this is ${arrow}`} />
                                <p className='text-green'>243.23 (30.34%)</p>
                            </div>
                        </div>
                        <div className='mt-6 flex flex-col gap-1'>
                            {secondDashboardDataColorProfile.map((data) =>
                                <SecondDashboardDataColorProfileTemplate data={data} />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


function SecondDashboardTemplate(props) {
    const { duration } = props.data
    return (
        <div className={duration === '1d' ? 'border-2 rounded-md border-[black] text-black px-2 font-bold' : ''}>{duration}</div>
    )
}

function SecondDashboardDataColorProfileTemplate(props) {
    const { name, variant } = props.data
    return (
        <div className='flex items-center gap-2'>
            <div className={`w-[12px] h-[12px] rounded-sm ${variant}`}></div>
            <div className='text-dark-grey text-sm'>{name}</div>
        </div>
    )
}

const secondDashboardDataColorProfile = [
    {
        name: 'Portfolio',
        variant: 'bg-dark-blue'
    },
    {
        name: 'Dollar',
        variant: 'bg-blue'
    },
    {
        name: 'ETFs',
        variant: 'bg-red'
    }
]

const secondDashboardData = [
    {
        duration: '1d'
    },
    {
        duration: '1w'
    },
    {
        duration: '1m'
    },
    {
        duration: '1y'
    },
    {
        duration: 'All'
    }
]