import PropTypes from 'prop-types'

export default function Dropdown({isOpen}){

    return(

        <>
            <select className={`bg-yellow border-2 border-black rounded-3xl py-2 px-1 relative top-10 left-5 ${ isOpen ? `` : `z-40`}`} name="country" id="country">
                <option value="english">🇬🇧 US</option>
                <option value="netherland">🇳🇱 NL</option>
                <option value="deustch">🇩🇪 DE</option>
                <option value="france">🇫🇷 FR</option>
            </select>
        </>
    )
}


Dropdown.propTypes = {
      isOpen: PropTypes.bool
}