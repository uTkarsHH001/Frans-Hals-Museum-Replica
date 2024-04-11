
export default function About(){
    return(
        <>
           <div className="columns text-lg relative lg:left-[53%] xl:left-[56%]">
                <div className="column float-left px-12">
                    <ul>
                        <li><a className="hover:underline" href="#">Our mission</a></li>
                        <li><a className="hover:underline" href="#">Our buildings</a></li>
                        <li><a className="hover:underline" href="#">Frans Hals</a></li>
                        <li><a className="hover:underline" href="#">History</a></li>
                        <li><a className="hover:underline" href="#">Our team</a></li>
                        <li><a className="hover:underline" href="#">Partners</a></li>
                    </ul>
                </div>
                <div className="column">
                <ul>
                    
                    <li><a className="hover:underline" href="#">Contact</a></li>
                    <li><a className="hover:underline" href="#">Publications</a></li>
                    <li><a className="hover:underline" href="#">Press</a></li>
                    <li><a className="hover:underline" href="#">Rent this space</a></li>
                    <li><a className="hover:underline" href="#">Privacy Statement</a></li>
                </ul>
                </div>
            </div>
        </>
    )
}