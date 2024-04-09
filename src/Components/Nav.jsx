import Dropdown from './Dropdown'
import logo from '../assets/logo.svg'
import { useState } from 'react';
import { BsCalendar2Event } from "react-icons/bs";
import { IoTicketOutline, IoSearch } from "react-icons/io5";
import { RiMenu5Fill } from "react-icons/ri";
import { MdOutlineLocationOn } from "react-icons/md";
import { FaRegClock } from "react-icons/fa";
import NavContent from './NavContent'
import PropTypes from 'prop-types'

export default function Nav({isMd}) {
  
  const[buttonStates, setButtonStates] = useState({
    event : false,
    menu : false,
    search : false,
    location : false,
    openingHours : false
  })

  const handleClick = (buttonName) => {
    const newButtonStates = {...buttonStates};
    Object.keys(newButtonStates).forEach(name => {
      newButtonStates[name] = name == buttonName ? !newButtonStates[name] : false;
    }) 
    setButtonStates(newButtonStates);   
  }

  return (
    <>

<div className='w-full absolute top-0'>
  <Dropdown/>
  {!isMd && 
  <div>
    <div className="text-lg list-none flex justify-center gap-16">
      <li><a href="#">VISIT</a></li>
      <li><a href="#">ART & NEWS</a></li>
      <li><a href=""><img className="w-40 h-12" src={logo} alt="" /></a></li>
      <li><a href="#">ABOUT</a></li>
      <li><a href="#">SUPPORT</a></li>
    </div>

    <div className='flex justify-end relative -top-12 right-10'> 
        <button className="bg-[#231F20] text-yellow px-10 py-1 rounded-full"><IoTicketOutline className="text-5xl inline p-3 fill-yellow transition duration-300 hover:opacity-35"/> Buy Tickets</button>
    </div>  
  </div>}

  {isMd && 
  <div className='flex justify-center'>
    <img className="w-20 h-6" src={logo} alt="" />
  </div>
  }
</div>
    

      <div className={`w-full ${ buttonStates.event || buttonStates.menu || buttonStates.search || buttonStates.location || buttonStates.openingHours ? `h-[100vh]` : ``} fixed bottom-0`}>
        
        <div className={`w-full h-[92%] bg-black bg-opacity-80  absolute text-yellow lg:left-12 lg:h-full 
             ${ buttonStates.event || buttonStates.menu || buttonStates.search || buttonStates.location || buttonStates.openingHours ? `top-0` : `top-full`} 
             lg:${ buttonStates.event || buttonStates.menu || buttonStates.search || buttonStates.location || buttonStates.openingHours ? `left-0` : `-left-full`}`}>

          <NavContent buttonStates={buttonStates}/>

        </div>
        
        <div className={`${ buttonStates.event || buttonStates.menu || buttonStates.search || buttonStates.location || buttonStates.openingHours ? `lg:bg-bblack lg:h-full lg:w-12` : ``}`}>
          <div className={`w-full h-[8%] bg-bblack fixed bottom-0 flex 
          justify-around items-center text-4xl text-yellow lg:flex-col  lg:w-12 lg:h-80 lg:top-40 lg:left-0 lg:rounded-r-3xl lg:text-2xl`}>
            
            <button onClick={() => handleClick('event')}><BsCalendar2Event /></button>
            <button ><a href="#"><IoTicketOutline /></a></button>
            {isMd && <button onClick={() => handleClick('menu')} className='bg-yellow w-20 border border-12 border-bblack p-4 rounded-full relative -top-2'><RiMenu5Fill className='fill-black text-5xl mx-auto' /></button>}
            <button onClick={ () => handleClick('search')}><IoSearch /></button>
            <button onClick={() => handleClick('location')}><MdOutlineLocationOn /></button>
            {!isMd && <button onClick={() => handleClick('openingHours')}><FaRegClock /></button>}

          </div>
        </div>
      </div>

    </>
  );
}

Nav.propTypes = {
  isMd : PropTypes.bool
}