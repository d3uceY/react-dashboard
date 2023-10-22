import React from 'react'
import FirstSection from './firstsection/FirstSection.jsx'
import SecondSection from './secondsection/SecondSection.jsx'

export default function Dashboard() {
  return (
    <div className='bg-white w-full'>
        <FirstSection/>
        <SecondSection/>
    </div>
  )
}
