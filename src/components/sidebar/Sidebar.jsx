import React from 'react'
import Avatar from './avatartemplate/Avatar.jsx'
import { AvatarData } from './avatartemplate/AvatarData.js'
import { MenuData } from './menu/MenuData.js'
import Menu from './menu/Menu.jsx'
import logout from '../../assets/logout.svg'
import './sidebar.css'

export default function Sidebar() {
  return (
    <div className=' h-screen hidden xl:flex flex-col justify-between sidebar py-8 px-9 md:w-[300px] lg:w-[300px] xl:w-[400px] bg-white'>
      <div>
        {AvatarData.map((avatar) =>
          <Avatar data={avatar} />
        )}
      </div>

      <div className='flex flex-col gap-8'>
        {MenuData.map((menudata) =>
          <Menu data={menudata} />
        )}
      </div>

      <div className='flex gap-4'>
        <img src={logout} alt={`this is the ${logout}`} />
        <div>Logout</div>
      </div>
    </div>
  )
}
