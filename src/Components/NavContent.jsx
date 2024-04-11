import { events } from './events'
import { v4 as uuidv4} from 'uuid'
import ViewAllEventButton from './ViewAllEventButton';
import { CiSearch, CiCircleInfo } from 'react-icons/ci'
import { GiIndianPalace, GiByzantinTemple } from "react-icons/gi";
import PropTypes from 'prop-types';

export default function NavContent({buttonStates}){
    
    return (
      <>
        {Object.entries(buttonStates).map(([key, value]) => {
          const backgroundColor = {
            event: 'yellow',
            menu: 'orange',
            search: 'purple',
            location: 'pink',
            openingHours: 'yellow'
          }[key];
  
          const content = {
            event: 
            (
              <>
                <p className='text-lg pt-6'>AGENDA</p>
                <h1 className="text-3xl p-8">See what&apos;s going <br /> on today</h1>

                {events.map(el => {
                  return <>
                        <div key={uuidv4()} className={`p-5 flex flex-shrink-0 flex-col items-center outline-1`}>
                
                          <img className={` w-72 h-72 transition duration-300 ease-linear hover:outline hover:outline-3`} 
                              src={el.src} 
                              alt="" />
                          <p className="text-1xl m-3">{el.title}</p>
                          <p className="font-raisonne text-2xl m-2">{el.subtitle}</p>
                          
                          <p className='p-3'>{el.para}</p>
                        </div>
                  </>
                })}

                <ViewAllEventButton />

              </>
            ),
            
            menu: 
            (
              <>   
              </>
            ),

            search: 
            (
              <>
                <div className='w-full h-full p-12 flex justify-center items-center'>
                  <input className='w-full h-12 bg-lightOrange rounded-3xl p-5 placeholder-bblack text-2xl' type="text" placeholder='Type Here ... ' />
                  <CiSearch className='text-3xl absolute right-16'/>  
                </div>
              </>
            ),

            location: 
            (
              <>
                <p className='text-lg pt-16 lg:pt-2'>LOCATIONS</p>
                <h1 className="text-3xl p-5">One museum <br /> two locations</h1>
                <div className="flex flex-col justify-around md:gap-10">
                            <div className="text-center">
                                <GiIndianPalace className="text-6xl w-full"/>
                                <h1 className="pt-3 text-2xl">HOF</h1>
                                <p className="text-sm">Groot Heilgland 62 <br /> 2011 ES Haarlem </p>
                            </div>
                            <div className="text-center">
                                <GiByzantinTemple className="text-6xl w-full"/>
                                <h1 className="pt-3 text-2xl">HAL</h1>
                                <p className="text-sm">Grote Markt 16<br /> 2011 RD Haarlem </p>
                            </div>
                        </div>
                        <div className='font-raisonne text-center'>
                  <button className="bg-[#231F20] text-yellow mt-5 px-10 py-1 rounded-full"><CiCircleInfo className="text-3xl h-12 inline fill-yellow transition duration-300 hover:opacity-35"  /> Practical Information</button>
                </div>
              </>
            ),
            
            openingHours:
            (
              <>
                <p className='text-lg'>LOCATIONS</p>
                <h1 className="text-3xl p-5">Sorry We are <br /> closed today!</h1>
                <div className='flex justify-around text-6xl pt-6'>
                  <GiIndianPalace /> <GiByzantinTemple />
                </div>
                <p className="text-lg pt-6">Tuesday - Sunday 11 a.m. – 5 p.m.</p>
                <p className="text-lg">See practical info for public holidays.</p>

                <div className='font-raisonne text-center'>
                  <button className="bg-[#231F20] text-yellow mt-5 px-10 py-1 rounded-full"><CiCircleInfo className="text-3xl h-12 inline fill-yellow transition duration-300 hover:opacity-35"  /> Practical Information</button>
                </div>
              </>
            )

          }[key];
  
          if (value) {
            return (
              <div
                key={key}
                className={`absolute bottom-0 w-full h-3/4 overflow-x-hidden overflow-y-scroll bg-${backgroundColor} text-center text-bblack lg:w-96 lg:h-full lg:p-12`}
              >
                {content}
              </div>
            );
          }
          return null;
        })}
      </>
    );
  }

  NavContent.propTypes = {
    buttonStates: PropTypes.shape({
      event: PropTypes.bool,
      menu: PropTypes.bool,
      search: PropTypes.bool,
      location: PropTypes.bool
    }).isRequired
  }