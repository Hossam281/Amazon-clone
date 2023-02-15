import React from 'react'
import flagimg from '../assests/5f3ae12fb2502900043694d8.png'
import {AiOutlineSearch,AiOutlineMenu} from 'react-icons/ai'
import {HiOutlineLocationMarker} from 'react-icons/hi'
const Header = () => {
  return (
    <>
    <div className='flex px-2 py-[2px] justify-between align-middle bg-[#131921] text-white h-16'>
        <div className="start flex w-1/5">
            <div className='hover:border-[1px] px-2 pt-2 hover:border-white rounded-[2px]  cursor-pointer'>
                <svg height="50" viewBox="163.5 263.1 285 85.8" width="95" xmlns="http://www.w3.org/2000/svg">
                    <g clipRule="evenodd" fill="#fff" fillRule="evenodd">
                    <path d="m340.3 330.2c-16.5 12.2-40.5 18.7-61.2 18.7-29 0-55-10.7-74.8-28.5-1.5-1.4-.2-3.3 1.7-2.2 21.3 12.4 47.6 19.8 74.8 19.8 18.3 0 38.5-3.8 57.1-11.7 2.8-1.1 5.1 1.9 2.4 3.9z" fill="#f90"/><path d="m347.2 322.3c-2.1-2.7-14-1.3-19.3-.6-1.6.2-1.9-1.2-.4-2.2 9.5-6.7 25-4.7 26.8-2.5s-.5 17.8-9.4 25.2c-1.4 1.1-2.7.5-2.1-1 2-5 6.5-16.1 4.4-18.9z" fill="#f90"/><path d="m328.2 272.5v-6.5c0-1 .7-1.6 1.6-1.6h29c.9 0 1.7.7 1.7 1.6v5.5c0 .9-.8 2.1-2.2 4.1l-15 21.4c5.6-.1 11.5.7 16.5 3.5 1.1.6 1.4 1.6 1.5 2.5v6.9c0 1-1 2.1-2.1 1.5-8.9-4.7-20.8-5.2-30.6.1-1 .5-2.1-.5-2.1-1.5v-6.6c0-1 0-2.8 1.1-4.4l17.4-24.9h-15.1c-.9 0-1.7-.7-1.7-1.6zm-105.7 40.3h-8.8c-.8-.1-1.5-.7-1.6-1.5v-45.2c0-.9.8-1.6 1.7-1.6h8.2c.9 0 1.5.7 1.6 1.5v5.9h.2c2.1-5.7 6.2-8.4 11.6-8.4 5.5 0 9 2.7 11.4 8.4 2.1-5.7 7-8.4 12.2-8.4 3.7 0 7.7 1.5 10.2 5 2.8 3.8 2.2 9.3 2.2 14.2v28.6c0 .9-.8 1.6-1.7 1.6h-8.7c-.9-.1-1.6-.8-1.6-1.6v-24c0-1.9.2-6.7-.2-8.5-.7-3-2.6-3.9-5.2-3.9-2.1 0-4.4 1.4-5.3 3.7s-.8 6.1-.8 8.7v24c0 .9-.8 1.6-1.7 1.6h-8.8c-.9-.1-1.6-.8-1.6-1.6v-24c0-5 .8-12.5-5.4-12.5-6.3 0-6.1 7.2-6.1 12.5v24c-.1.8-.8 1.5-1.8 1.5zm163-49.3c13.1 0 20.2 11.2 20.2 25.5 0 13.8-7.8 24.8-20.2 24.8-12.8 0-19.8-11.2-19.8-25.2-.1-14.1 7-25.1 19.8-25.1zm0 9.3c-6.5 0-6.9 8.9-6.9 14.4s-.1 17.3 6.8 17.3c6.8 0 7.2-9.5 7.2-15.3 0-3.8-.2-8.4-1.3-12-1-3.2-3-4.4-5.8-4.4zm37.1 40h-8.8c-.9-.1-1.6-.8-1.6-1.6v-45.3c.1-.8.8-1.5 1.7-1.5h8.2c.8 0 1.4.6 1.6 1.3v6.9h.2c2.5-6.2 5.9-9.1 12-9.1 3.9 0 7.8 1.4 10.3 5.3 2.3 3.6 2.3 9.7 2.3 14.1v28.5c-.1.8-.8 1.4-1.7 1.4h-8.8c-.8-.1-1.5-.7-1.6-1.4v-24.6c0-5 .6-12.2-5.5-12.2-2.1 0-4.1 1.4-5.1 3.6-1.2 2.8-1.4 5.5-1.4 8.6v24.4c-.1.9-.9 1.6-1.8 1.6zm-117.5-21.6c0 3.4.1 6.3-1.6 9.4-1.4 2.5-3.6 4-6.1 4-3.4 0-5.4-2.6-5.4-6.4 0-7.5 6.7-8.9 13.1-8.9zm8.9 21.5c-.6.5-1.4.6-2.1.2-2.9-2.4-3.5-3.6-5.1-5.9-4.8 4.9-8.3 6.4-14.5 6.4-7.4 0-13.2-4.6-13.2-13.7 0-7.2 3.9-12 9.4-14.4 4.8-2.1 11.5-2.5 16.6-3.1v-1.1c0-2.1.2-4.6-1.1-6.4-1.1-1.6-3.1-2.3-4.9-2.3-3.4 0-6.4 1.7-7.1 5.3-.2.8-.7 1.6-1.5 1.6l-8.5-.9c-.7-.2-1.5-.7-1.3-1.8 2-10.4 11.3-13.5 19.7-13.5 4.3 0 9.9 1.1 13.3 4.4 4.3 4 3.9 9.4 3.9 15.2v13.7c0 4.1 1.7 5.9 3.3 8.2.6.8.7 1.8 0 2.3-1.9 1.5-5.1 4.3-6.9 5.8zm-124.4-21.5c0 3.4.1 6.3-1.6 9.4-1.4 2.5-3.6 4-6.1 4-3.4 0-5.4-2.6-5.4-6.4 0-7.5 6.7-8.9 13.1-8.9zm8.8 21.5c-.6.5-1.4.6-2.1.2-2.9-2.4-3.5-3.6-5.1-5.9-4.8 4.9-8.3 6.4-14.5 6.4-7.4 0-13.2-4.6-13.2-13.7 0-7.2 3.9-12 9.4-14.4 4.8-2.1 11.5-2.5 16.6-3.1v-1.1c0-2.1.2-4.6-1.1-6.4-1.1-1.6-3.1-2.3-4.9-2.3-3.4 0-6.4 1.7-7.1 5.3-.2.8-.7 1.6-1.5 1.6l-8.5-.9c-.7-.2-1.5-.7-1.3-1.8 2-10.4 11.3-13.5 19.7-13.5 4.3 0 9.9 1.1 13.3 4.4 4.3 4 3.9 9.4 3.9 15.2v13.7c0 4.1 1.7 5.9 3.3 8.2.6.8.7 1.8 0 2.3-1.9 1.5-5.1 4.3-6.9 5.8z"/></g>
                    </svg>
            </div>

            <div className='flex p-2 mx-5 -mt-[4px] cursor-pointer hover:border-[1px] hover:border-white rounded-[2px]'>
                <HiOutlineLocationMarker className='text-white text-[19px] mt-[20px] mr-[2px] font-bold'/>
                <div className='text-white flex flex-col justify-center'>
                    <span className=' text-gray-300 text-[12px] tracking-[0px] font-semibold'>Deliver to</span> 
                    <span className='text-sm font-bold -mt-[6px] '>Egypt</span> 
                </div>
            </div>
        </div>

        <div className="middle w-3/6 flex align-middle p-2 mx-0 px-0">
                <select className='h-10  cursor-pointer rounded-tl-[5px] rounded-bl-[5px] rounded-tr-none rounded-br-none bg-[#dadada] hover:bg-gray-300 active:bg-slate-300 p-2 text-[13px] outline-none text-[#666666] hover:text-black active:text-black active:outline-orange-400'>
                    <option selected disabled hidden>All</option>
                </select>
                <input type="text" placeholder='Search Amazon' className='h-10  w-full outline-none p-2'/>
                <button className='h-10 bg-[#f2bc68] px-[9px] text-[#333333] text-[28px] rounded-tr-[3px] rounded-br-[3px]'>
                    <AiOutlineSearch className='text-[27px]'/>
                </button>
        </div>

        <div className="end w-2/6 flex justify-between items-center px-3 py-1">
            <div className="first p-1 h-full hover:border-[1px] hover:border-white  flex cursor-pointer select-none text-[14px] font-bold items-center"> 
                <img src={flagimg} className="w-[24px] h-9 ml-1" alt="" />
                EN
                <span className='text-gray-500 ml-1 text-[10px]'>▼</span>
            </div>
            <div className="second p-2 h-full hover:border-[1px] hover:border-white flex flex-col cursor-pointer select-none">
                <p className=' text-[12px] font-semibold'>Hello, sign in</p>
                <p className=' text-[14px] font-bold -mt-[6px]'>Account & Lists <span className='text-gray-500 text-[10px]'>▼</span></p>
            </div>
            <div className="third p-2 h-full hover:border-[1px] hover:border-white flex flex-col cursor-pointer select-none">
                <p className=' text-[12px] font-semibold'>Returns</p>
                <p className=' text-[14px] -mt-[6px] font-bold'>& Orders <span className='text-gray-500 text-[10px]'>▼</span></p>
            </div>
            <div className="fourth p-2 h-full hover:border-[1px] hover:border-white flex cursor-pointer select-none">
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" className=" text-[40px]" xmlns="http://www.w3.org/2000/svg">
                <path d="M11 9h2V6h3V4h-3V1h-2v3H8v2h3v3zm-4 9c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2zm-9.83-3.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.86-7.01L19.42 4h-.01l-1.1 2-2.76 5H8.53l-.13-.27L6.16 6l-.95-2-.94-2H1v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.13 0-.25-.11-.25-.25z"></path>
            </svg>
            <p className='mt-3 text-md font-bold'>Cart</p>
            </div>
        </div>
    </div>
    <div className="sub-menu select-none flex justify-between bg-[#232f3e] text-sm text-white ">
        <div className="left flex items-center">
            <div className='p-2 pt-2 px-2 flex items-center font-bold hover:border-[1px] rounded-[1px] border-white cursor-pointer '>
                <AiOutlineMenu className='text-xl mr-1'/>
                All
            </div>
            <p className='px-2 pt-2 h-full font-semibold text-[15px] hover:border-[1px] rounded-[1px] border-white cursor-pointer '>Today's Deal</p>
            <p className='px-2 pt-2 h-full font-semibold text-[15px] hover:border-[1px] rounded-[1px] border-white cursor-pointer '>Customer Service</p>
            <p className='px-2 pt-2 h-full font-semibold text-[15px] hover:border-[1px] rounded-[1px] border-white cursor-pointer '>Registery</p>
            <p className='px-2 pt-2 h-full font-semibold text-[15px] hover:border-[1px] rounded-[1px] border-white cursor-pointer '>Gift Cards</p>
            <p className='px-2 pt-2 h-full font-semibold text-[15px] hover:border-[1px] rounded-[1px] border-white cursor-pointer '>Sell</p>
        </div>
        <div className="right flex items-center text-white hover:border-[1px] rounded-[1px] border-white cursor-pointer px-3 font-bold text-[15px]">
            Shop great deals now
        </div>
    </div>
    </>
    
  )
}

export default Header