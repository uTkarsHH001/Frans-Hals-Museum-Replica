import PropTypes from 'prop-types'

export default function Header({isSmall}){

    return(
        
        <div className='bg-yellow h-96 relative'>
            
            <div className="text-bblack text-1xl max-sm:text-7xl  sm:text-7xl md:text-8xl lg:text-9xl w-full tracking-wide absolute bottom-0 hover:tex-yellow">

                <div className='one w-full text-center overflow-hidden max-sm:h-16 max-sm:flex max-sm:flex-col'>
                    <span className='max-sm:'>ONE</span> &nbsp;
                    <span className='max-sm:-translate-y-16'>{isSmall ? 'TWO' : 'MUSEUM'}</span>
                </div>

                <div className='two w-full text-center overflow-hidden max-sm:h-16 max-sm:flex max-sm:flex-col-reverse'>
                    <span>{isSmall ? 'MUSEUM' : 'TWO'}</span> &nbsp;
                    <span className='max-sm:translate-y-16'>LOCATION</span>
                </div>

            </div>

        </div> 
    )
}

Header.propTypes = {
    isSmall : PropTypes.bool
}













