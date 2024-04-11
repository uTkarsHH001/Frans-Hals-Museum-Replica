
export default function Dropdown({buttonStates}){

    return(

        <>
            <select className={`bg-yellow border-2 border-black rounded-3xl py-2 px-1 relative top-10 left-5 ${ buttonStates.event || buttonStates.menu || buttonStates.search || buttonStates.location || buttonStates.openingHours ? `` : `z-40`}`} name="country" id="country">
                <option value="english">🇬🇧 US</option>
                <option value="netherland">🇳🇱 NL</option>
                <option value="deustch">🇩🇪 DE</option>
                <option value="france">🇫🇷 FR</option>
            </select>
        </>
    )
}