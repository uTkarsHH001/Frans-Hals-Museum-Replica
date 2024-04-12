
export default function Visit(){
    return(
        <>
            <div className="h-full p-4 text-lg relative lg:left-[20%] xl:left-[23%]">
                <div className="column md:float-left md:px-12">
                    <ul>
                    <li className = "mt-3"><a className="hover:underline " href="#">Exhibitions & Events</a></li>
                    <li className = "mt-3"><a className="hover:underline " href="#">Tickets</a></li>
                    <li className = "mt-3"><a className="hover:underline " href="#">Practical information</a></li>
                    <li className = "mt-3"><a className="hover:underline " href="#">Audio tours</a></li>
                    <li className = "mt-3"><a className="hover:underline " href="#">Activities for children</a></li>
                    </ul>
                </div>
                <div className="column">
                    <ul>
                    <li className = "mt-3"><a className="hover:underline " href="#">Education</a></li>
                    <li className = "mt-3"><a className="hover:underline " href="#">Cafe, shop & garden</a></li>
                    <li className = "mt-3"><a className="hover:underline " href="#">Groups & Guided Tours</a></li>
                    <li className = "mt-3"><a className="hover:underline " href="#">FAQ</a></li>
                    </ul>
                </div>
            </div>
            
        </>
    )
}