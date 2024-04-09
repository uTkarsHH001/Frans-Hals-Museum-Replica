import { GiIndianPalace, GiByzantinTemple } from "react-icons/gi";

export default function Locations(){

    return(

        <>
            <div className="bg-orange">

                <h1 className=" text-6xl text-center pt-12">LOCATIONS</h1>
                <div className="flex justify-around pt-20 pb-14">
                    <div className="text-center">
                        <GiIndianPalace className="text-7xl w-full"/>
                        <h1 className="pt-3 text-2xl">HOF</h1>
                        <p className="text-sm">Groot Heilgland 62 <br /> 2011 ES Haarlem </p>
                    </div>
                    <div className="text-center">
                        <GiByzantinTemple className="text-7xl w-full"/>
                        <h1 className="pt-3 text-2xl">HAL</h1>
                        <p className="text-sm">Grote Markt 16<br /> 2011 RD Haarlem </p>
                    </div>
                </div>

                <div className="text-center">
                        <h1 className="text-2xl py-3">One museum two locations</h1>
                        <p className="text-sm px-8">Welcome to the Frans Hals Museum - The art museum of Haarlem - With art from the 16th and 17th centuries, modern and new art and a stimulating mix of both.</p>
                        <div className="pt-4 pb-20" >
                            <a className="underline" href="#">About our buildings</a>
                        </div>
                </div> 
            </div>
        </>
    )
}