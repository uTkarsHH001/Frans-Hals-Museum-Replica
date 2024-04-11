import { useState } from 'react';
import { BsCalendar2Event } from "react-icons/bs";
import { IoTicketOutline, IoSearch } from "react-icons/io5";
import { RiMenu5Fill } from "react-icons/ri";
import { MdOutlineLocationOn } from "react-icons/md";
import { FaRegClock } from "react-icons/fa";
import Dropdown from './Dropdown'
import logo from '../assets/logo.svg'
import Visit from './Visit'
import ArtnNews from './ArtnNews'
import About from './About'
import Support from './Support'
import NavContent from './NavContent'
import PropTypes from 'prop-types'

export default function Nav({isMd}) {

  const[isHover, setIsHover] = useState({
    li: false,
    visit: false,
    art: false,
    about: false,
    support: false
  });
  
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

  function setHover(item){
    const newIsHover = {...isHover};
    Object.keys(newIsHover).forEach(name => {
      newIsHover[name] = name === item ? true : false;
    })
    setIsHover({...newIsHover, li : true});
  }

  function setHoverFalse(){
    const newIsHover = {...isHover};
    Object.keys(newIsHover).forEach(name => {
      newIsHover[name] = false;
    })
    setIsHover(newIsHover);
  }
  return (
    <>
              {/* Navbar Menu Start*/}

        <div className='absolute w-full top-0'>
          <div className={`bg-yellow relative w-full p-3 ${ buttonStates.event || buttonStates.menu || buttonStates.search || buttonStates.location || buttonStates.openingHours ? `` : `z-30`}`}>
          <Dropdown buttonStates={buttonStates}/>
            {!isMd && 
            <div>
              <div className="relative text-lg list-none flex gap-10 justify-center">
                <li><a onMouseEnter={() => setHover('visit')} href="#" >VISIT</a></li>
                <li><a onMouseEnter={() => setHover('art')} href="#">ART & NEWS</a></li>
                <li><a href="#"><img className="w-40 h-12" src={logo} alt="" /></a></li>
                <li><a onMouseEnter={() => setHover('about')} href="#">ABOUT</a></li>
                <li><a onMouseEnter={() => setHover('support')} href="#">SUPPORT</a></li>
              </div>

              <button className="bg-[#231F20] text-yellow px-10 py-1 rounded-full float-right absolute top-10 right-10"><IoTicketOutline className="text-5xl inline p-3 fill-yellow transition duration-300 hover:opacity-35"/> Buy Tickets</button>
             
            </div>
            }

            {isMd && 
            <div className='flex justify-center'>
              <img className="w-20 h-6" src={logo} alt="" />
            </div>
            }
          </div>
          <div className={`w-full h-[100vh] absolute ${isHover.li ? `top-0` : `-top-[100vh]`} tranistion-top delay-100 duration-700 z-10`}>
            <div className='relative h-[60vh] pt-12 bg-yellow'>
              {isHover.visit &&
              <div className='w-full h-full text-5xl text-bblack relative top-20 overflow-hidden'>
                <Visit/>
              </div>
              }
              {isHover.art &&
                <div className='w-full h-full text-5xl text-bblack relative top-20'>
                  <ArtnNews/>
                </div>
              }
              {isHover.about &&
                <div className='w-full h-full text-5xl text-bblack relative top-20'>
                  <About/>
                </div>
              }
              {isHover.support &&
                <div className='w-full h-full text-5xl text-bblack relative top-20'>
                  <Support/>
                </div>
              }
            </div>
            <div onMouseEnter={() => setHoverFalse()} className="bg-bblack bg-opacity-80 h-[40vh]"></div>
          </div>
        </div>
              {/* Navbar Menu ENd */}
              

              {/* Side Navbar Start */}

      <div className={`w-full ${ buttonStates.event || buttonStates.menu || buttonStates.search || buttonStates.location || buttonStates.openingHours ? `h-[100vh]` : ``} fixed bottom-0`}>
              
              {/* Side Navbar buttons */}
        <div className={`${ buttonStates.event || buttonStates.menu || buttonStates.search || buttonStates.location || buttonStates.openingHours ? `lg:bg-bblack lg:h-full lg:w-12` : ``} relative z-20`}>
          <div className={`w-full h-46 bg-bblack fixed bottom-0 flex 
          justify-around items-center text-4xl text-yellow lg:flex-col  lg:w-12 lg:h-80 lg:top-40 lg:rounded-r-3xl lg:text-2xl ${isHover.li ? `-left-full` : `left-0`} transition-left duration-700`}>
            
            <button onClick={() => handleClick('event')}><BsCalendar2Event /></button>
            <button ><a href="#"><IoTicketOutline /></a></button>
            {isMd && <button onClick={() => handleClick('menu')} className='bg-yellow w-20 border border-12 border-bblack p-4 rounded-full relative -top-2'><RiMenu5Fill className='fill-black text-5xl mx-auto' /></button>}
            <button onClick={ () => handleClick('search')}><IoSearch /></button>
            <button onClick={() => handleClick('location')}><MdOutlineLocationOn /></button>
            {!isMd && <button onClick={() => handleClick('openingHours')}><FaRegClock /></button>}

          </div>
        </div>
        
              {/* Side Navbar Content */}
        <div className={`w-full h-[94%] bg-black bg-opacity-80  absolute text-yellow lg:left-12 lg:h-full 
             ${ buttonStates.event || buttonStates.menu || buttonStates.search || buttonStates.location || buttonStates.openingHours ? `top-0` : `top-full`} 
             lg:${ buttonStates.event || buttonStates.menu || buttonStates.search || buttonStates.location || buttonStates.openingHours ? `left-0` : `-left-full`} z-10`}>
          <NavContent buttonStates={buttonStates}/>
        </div>

      </div>

              {/* Side Navbar End */}

    </>
  );
}

Nav.propTypes = {
  isMd : PropTypes.bool,
  buttonStates: PropTypes.shape({
    event: PropTypes.bool,
    menu: PropTypes.bool,
    search: PropTypes.bool,
    location: PropTypes.bool
  }).isRequired
}