import Img1 from '../assets/Img1.jpeg'
import Img2 from '../assets/Img2.jpeg'


export default function Images(){

    return(

        <>
            <div className="Image-wrapper">
                <img className='max-h-[50vh] sm:w-full lg:w-2/4' src={Img1} alt="" />
                <div className='video absolute w-full lg:w-2/4 text-center -mt-10'>
                    <a  className='text-6xl rounded-full px-6 px-1 bg-orange' href="#">&gt;</a>
                    <p className='absolute w-full text-2xl text-white text-center py-8'>Play video about <br /> the Frans Hals Museum</p>
                </div>  
                <img className='max-h-[50vh] sm:w-full lg:w-2/4' src={Img2} alt="" />
            </div>
        </>
    )
}