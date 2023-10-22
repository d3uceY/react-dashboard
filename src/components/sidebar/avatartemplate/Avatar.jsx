import React from 'react'

export default function Avatar(props) {
  const { avatarImage, avatarName, avatarEmail } = props.data
  return (
    <div className='flex gap-5 items-center'>
      <div className='flex-1'>
        <img className='md:w-[55px] rounded-full min-w-[35px]' src={avatarImage} alt={`this is the ${avatarName}`} />
      </div>
      <div className='flex-1'>
        <h2 className='font-bold text-[10px] lg:text-lg text-very-dark-blue leading-5'>{avatarName}</h2>
        <p className='font-[400] text-[10px] lg:text-sm text-very-dark-blue'>{avatarEmail}</p>
      </div>
    </div>
  )
}
