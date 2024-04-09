import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Event from './Event';
import  { events } from './events'
import { v4 as uuidv4} from 'uuid'
import ViewAllEventButton from '../Components/ViewAllEventButton'

export default function EventSlider() {
    
    const settings = {
                    dots: false,
                    infinite: true,
                    slidesToShow: 3,
                    autoplay: true,
                    speed: 7000,
                    autoplaySpeed: 1,
                    cssEase: "linear",
                    arrows: false,
                    responsive: [
                        {
                            breakpoint: 1024,
                            settings: {
                                dots: false,
                                infinite: true,
                                slidesToShow: 2,
                                autoplay: true,
                                speed: 7000,
                                autoplaySpeed: 1000,
                                cssEase: "linear",
                            }
                        },
                        {
                            breakpoint: 720,
                            settings: {
                                dots: false,
                                infinite: true,
                                slidesToShow: 1.2,
                                autoplay: true,
                                speed: 7000,
                                autoplaySpeed: 1000,
                                cssEase: "linear",
                            }
                        }
                    ]
                };



    return (
        <div>

            <div className="wrapper bg-pink">
                
                <div className="slider-container">
                    <h1 className="text-2xl pt-24 pb-6 md:text-3xl lg:text-4xl text-center">WHAT&apos;S ON</h1>

                    <Slider {...settings} className="overflow-y-hidden">
                        {events.map(el => (
                            <Event key={uuidv4()} src={el.src} title={el.title} subtitle={el.subtitle} para={el.para} />               
                        ))}
                    </Slider>
                </div>

                <ViewAllEventButton />
                
            </div>            

        </div>

        
    );
}