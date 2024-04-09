import { GiIndianPalace, GiByzantinTemple } from "react-icons/gi";
import { FiFacebook } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import PropTypes from 'prop-types'


export default function Footer({isMd}){

    return (

        <>
            <div className="flex flex-col bg-yellow py-16 px-10 overflow-hidden">
                
                <div className="flex flex-col lg:flex-row md:justify-around">
                    <div>
                        <div className="flex flex-col items-around justify-around">
                            <div>
                                <h1 className="text-2xl md:text-3xl">Frans Hals Musesum likes to send you emails</h1>
                            </div>
                            <div className="">
                                <form className="my-6 flex gap-6 overflow-hidden">
                                    <input className="bg-yellow w-2/4 border-b-4 border-bblack placeholder-bblack" type="text" placeholder="Name"/>
                                    <input className="bg-yellow w-2/4 border-b-4 border-bblack placeholder-bblack" type="text" placeholder="Email"/><br />
                                </form>
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <button className="bg-bblack text-yellow w-60 py-4 rounded-2xl">Sign Up</button>
                        </div>
                    </div>
                    {isMd && <div className="border-l-2 h-full border-gray-400"></div>}
                    {/* <hr className="h-1 bg-bblack transform rotate-90" /> */}
                    <div>
                        <div className="flex justify-around md:gap-20 pt-20 pb-14">
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
                    </div>
                </div>

                {isMd && <hr className="h-1 bg-bblack my-4" />}

                <div className="flex flex-col lg:flex-row lg:justify-around">

                    <div className="flex justify-around lg:gap-4 lg:order-2 list-none my-4">
                        <li><a href="#">About</a></li>
                        <li><a href="#">FAQ</a></li>
                        <li><a href="#">Contact</a></li>
                        <li><a href="#">Colophan</a></li>
                        <li><a href="#">Terms</a></li>
                    </div>

                    <div className="flex gap-6 justify-center lg:order-1 my-6 text-3xl">
                        <FiFacebook />
                        <FaXTwitter />
                        <FaInstagram />
                    </div>
                    {isMd && <hr className="h-1 bg-bblack my-4" />}

                    <div className="flex gap-4 pb-8 justify-center lg:order-3">
                        <h1>HROLEM</h1>
                        <h1>VRINDEN <br /> LOTERU</h1>
                    </div>
                </div>
            </div>
        </>
    )
}

Footer.propTypes = {
    isMd : PropTypes.bool
}