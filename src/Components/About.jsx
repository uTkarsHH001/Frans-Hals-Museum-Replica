
export default function About(){
    return(
        <>
            <div className="h-full p-4 text-lg relative lg:left-[52%] xl:left-[55%]">
                <div className="column md:float-left md:px-12">
                    <ul>
                        <li className="mt-3"><a className="hover:underline" href="#">Our mission</a></li>
                        <li className="mt-3"><a className="hover:underline" href="#">Our buildings</a></li>
                        <li className="mt-3"><a className="hover:underline" href="#">Frans Hals</a></li>
                        <li className="mt-3"><a className="hover:underline" href="#">History</a></li>
                        <li className="mt-3"><a className="hover:underline" href="#">Our team</a></li>
                        <li className="mt-3"><a className="hover:underline" href="#">Partners</a></li>
                    </ul>
                </div>
                <div className="column">
                    <ul>
                        <li className="mt-3"><a className="hover:underline" href="#">Contact</a></li>
                        <li className="mt-3"><a className="hover:underline" href="#">Publications</a></li>
                        <li className="mt-3"><a className="hover:underline" href="#">Press</a></li>
                        <li className="mt-3"><a className="hover:underline" href="#">Rent this space</a></li>
                        <li className="mt-3"><a className="hover:underline" href="#">Privacy Statement</a></li>
                    </ul>
                </div>
            </div>

        </>
    )
}