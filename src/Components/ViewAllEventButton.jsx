import { BsCalendar4Event } from "react-icons/bs";

export default function ViewAllEventButton(){

    return(

        <>
            <div className='font-raisonne text-center'>
                <button className="bg-[#231F20] text-yellow my-10 px-10 py-1 rounded-full"><BsCalendar4Event className="text-5xl inline p-3 fill-yellow transition duration-300 hover:opacity-35"  /> View All Events</button>
            </div>
        </>
    )
}