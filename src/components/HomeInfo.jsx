import React from 'react'
import { Link } from 'react-router-dom';
import {arrow} from '../assets/icons'
const InfoBox = ({text,link,btnText})=>(
    <div className="info-box">
        <p className='font-medium sm:text-xl text-center'>{text}</p>
        <Link to={link} className='neo-brutalism-white neo-btn'>
            {btnText}
            <img src={arrow}/>
        </Link>
    </div>
)
const renderContent = {
    1:(
        <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>
         Hi again its me <span className='font-semibold'>
            Kenneth
         </span>
         <br />
         Studying in Computer Engineering
        </h1>
    ),
    2:(
        
        <InfoBox 
        text="Currently pursing a degree in Computer Engineering in St Francis Instistute of Technology And Engineering"
        link="/about"
        btnText="Learn more about me"
        />
        
    ),
    3:(
        <InfoBox
            text="Successfully made 2 projects using Java and in progress other projects with the help of React"
            link="/projects"
            btnText="Visit my Portfolio"
        />
    ),
    4:(
        <InfoBox
            text="Need my help to complete a Project ? I am just a few keystrokes away"
            link="/contact"
            btnText="Lets Talk"
        />
    ),
}


const HomeInfo = ({currentStage}) => {
  return renderContent[currentStage] || null;
}

export default HomeInfo