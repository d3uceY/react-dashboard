import React from 'react'
import Taskbar from './subcomponents/Taskbar'
import './firstsection.css'
import FirstSectionDashBoard from './subcomponents/FirstSectionDashBoard.jsx'

export default function FirstSection() {
    return (
        <div className='relative'>
            <div className='curved-background bg-grey'></div>
           <Taskbar/>
           <FirstSectionDashBoard/>
        </div>
    )
}

