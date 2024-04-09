
import Header from '../Header'
import EventSlider from '../EventSlider'
import Images from '../Images'
import Locations from '../Locations'
import News from '../News'
import Footer from '../Footer'
import PropTypes from 'prop-types'

export default function Home({isSmall, isMd}){

    return(

        <>  
            <Header isSmall={isSmall}/>
            <EventSlider />
            <Images />
            <Locations />
            <News />
            <Footer isMd={isMd}/>
        </>
    )
}

Home.propTypes = {
    isSmall : PropTypes.bool,
    isMd : PropTypes.bool
}