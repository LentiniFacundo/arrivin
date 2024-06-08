import React from 'react'

const NavBarSection = ({sectionName, url}) => {
  return (
    <li className='w-[auto] p-2 bg-sky-400 rounded-3xl text-white'><a href={url}>{sectionName}</a></li>
  )
}

export default NavBarSection