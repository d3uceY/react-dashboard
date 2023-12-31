import React from 'react'

export default function Menu(props) {
  const { menuName, menuImage } = props.data
  return (
    <div className='flex items-center gap-4 menu-template'>
      <div>
        <img className='w-5' src={menuImage} alt={`this is a ${menuName}`} />
      </div>
      <div className='relative'>
        <div className='menu-name text-md'>{menuName}</div>
      </div>
    </div>
  )
}

//menu css in sidebar.css
