import React from 'react'
import logo from '../img/IMG_2165.png'

export default function Header() {
  return (
    <>
     <div className='w-full bg-black h-[100px] fixed top-0 left-0 z-20 flex items-center justify-between p-2'>
        <img src={logo} className='w-[250px] invert opacity-75' alt="" />
        <div>
            <button className='w-[100px] h-[50px] pointer text-white font-bold text-[15px]'>Добавить</button>
        </div>
     </div> 
    </>
  )
}
