import React from 'react'
import avatar from '../../assets/avatar.png'
import { MenuData } from './menu/MenuData'
import Menu from './menu/Menu.jsx'
import logout from '../../assets/logout.svg'




export default function Navbar() {

    return (
        <div className='z-20 xl:hidden fixed w-screen bg-white flex flex-col justify-between h-[100vh] max-h-[500px] p-8 shadow-lg'>
            <div className='avatar flex gap-5 items-center'>
                <div>
                    <img className='w-[40px] rounded-full' src={avatar} alt="" />
                </div>
                <div>
                    <div className='font-bold text-[15px] text-very-dark-blue leading-5'>Onyekwelu Jesse</div>
                    <div className=' text-[13px] text-very-dark-blue leading-5'>onyekwelujesse1234@gmail</div>
                </div>
            </div>

            <div className='flex flex-col gap-8'>
                {MenuData.map((data) =>
                    <Menu data={data} />
                )}
            </div>

            <div className='flex gap-4'>
                <div><img src={logout} alt="" /></div>
                <div>Logout</div>
            </div>
        </div>
    )
}
