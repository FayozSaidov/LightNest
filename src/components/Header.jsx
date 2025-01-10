import React from 'react'
import logo from '@img/IMG_2165.png'

export default function Header({ openModal }) {
  return (
    <>
     <div className='w-full bg-zinc-900 h-[100px] fixed top-0 left-0 z-50 flex items-center justify-between p-2'>
        <img src={logo} className='w-[250px] invert opacity-75' alt="" />
        <div>
            <button onClick={openModal} className='w-[150px] ml-[50px] h-[50px] bg-[#af8d53] text-white font-bold rounded-lg'>Добавить</button>
        </div>
     </div> 
    </>
  )
}
