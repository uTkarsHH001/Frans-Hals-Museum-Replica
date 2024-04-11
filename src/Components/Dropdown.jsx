
export default function Dropdown(){

    return(

        <>
            <select className="bg-yellow border-2 border-black rounded-3xl py-2 px-1 relative top-10 left-5 z-40" name="country" id="country">
                <option value="english">English</option>
                <option value="netherland">Netherland</option>
                <option value="deustch">Deustch</option>
            </select>
        </>
    )
}