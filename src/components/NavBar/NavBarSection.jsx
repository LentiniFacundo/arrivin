import React from 'react'
import { Link } from 'react-router-dom'

const NavBarSection = ({sectionName, url, img}) => {
  return (
    <li className='w-48'>
      <Link to={url}>
        <article className='relative border-2 rounded-xl overflow-hidden border-[#1a233b] shadow-md flex justify-center items-center hover:shadow-2xl transition ease-in-out'>
          <div className='hover:scale-125 duration-[400ms] transition-all'>
            <img src={img} alt={sectionName} />
              <div className='absolute w-full bottom-3 bg-[#1a233b]/70'>
                <p className='p-2 text-white text-center'>{sectionName}</p>
              </div>
          </div>
        </article>
      </Link>
    </li>
  )
}

export default NavBarSection