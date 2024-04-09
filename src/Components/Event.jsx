import PropTypes from 'prop-types';

export default function Event({src,title, subtitle, para}){

    return(

        <>
            <div className={`p-5 text-center inline-block flex flex-shrink-0 flex-col outline-1`}>
                
                <img className={`w-72 h-72 md:w-96 md:h-96 transition duration-300 ease-linear hover:outline outline-yellow outline-8`} 
                     src={src} 
                     alt="" />
                <p className="text-1xl m-3">{title}</p>
                <p className="font-raisonne text-2xl m-2">{subtitle}</p>
                
                <p className='p-3'>{para}</p>
            </div>
        </>
    )
}

Event.propTypes = {
    src: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    para: PropTypes.string,
    smWidth : PropTypes.number,
    smHeight : PropTypes.number,
    mdWidth : PropTypes.number,
    mdHeight : PropTypes.number
};