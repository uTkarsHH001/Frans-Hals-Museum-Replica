import { MdTravelExplore } from "react-icons/md";

export default function Locations(){

    return(

        <>
            <div className="bg-purple text-center">

                
                <h1 className="text-6xl pt-12">NEWS</h1>
                <MdTravelExplore className="text-2xl inline mx-2" /> 
                <a className="underline" href="#">Explore museum highlights and more</a>
                
                <div className="flex justify-around py-24">
                    <div className="text-center p-2 w-36 ">
                        <img className="h-60 w-full border-8 border-orange" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRaVvNnzp8N8KN3xOBVhCJssv6OIi2u5bmhxPz8LO_SlbRa-w7" alt="" />
                            <h1 className="pt-3 text-sm">News 10th October 2023</h1>
                            <p className="text-2xl leading-none">Biggest tree ever planted in Haarlem at Frans Hals Museum courtyard</p>
                    </div>
                    <div className="text-center w-44 relative top-40">
                        <img className="h-24 w-full border-8 border-orange" src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcT7Pgsbb6ZAHIR9zz9D0xXzD0D7kuDWWc1riF0oxhgnRWTYpjbW" alt="" />
                        <h1 className="pt-3 text-sm">News 12th December 2022</h1>
                        <p className="text-2xl leading-none">Photo report unveiling Naked City </p>
                    </div>
                </div>
            </div>
        </>
    )
}