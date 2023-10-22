import React from 'react'

export default function Avatar(props) {
  const { avatarImage, avatarName, avatarEmail } = props.data
  return (
    <div className='flex gap-5 items-center'>
      <div>
        <img className='w-[55px] rounded-full' src={avatarImage} alt={`this is the ${avatarName}`} />
      </div>
      <div>
        <h2 className='font-bold text-lg text-very-dark-blue leading-5'>{avatarName}</h2>
        <p className='font-[400] text-sm text-very-dark-blue'>{avatarEmail}</p>
      </div>
    </div>
  )
}
