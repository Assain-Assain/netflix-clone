import React from 'react'
import './Home.css'
import Navebar from '../../components/Navebar/Navebar'
import bannerimg from '../../assets/1282358-h-daf565810c3c.webp'
import playicon from '../../assets/play-button-arrowhead.png'
import infoicon from '../../assets/info.png'
import TitleCard from '../../components/TitleCards/TitleCard'
import Footer from '../../components/Footer/Footer'
const Home = () => {
  return <> <div className='home'>
        <Navebar/>
        <div className='hero'>
          <img src={bannerimg} alt='' className='banner-img'/>
          <div className='hero-btn'>
            <button className='btn' > <img src={playicon} alt=''/>Play</button>
            <button className='btn-dark-btn'> <img src={infoicon} alt=''/>More Info</button>
        </div>
        <TitleCard/> 
         </div>
        <div className='more_cards'>
     <TitleCard title={"Blockbuster Movies"} catagery={"popular"}/> 
     <TitleCard title={"Upcoming"} catagery={"top_rated"}/> 
     <TitleCard title={"Only On Netflix "} catagery={"upcoming"}/> 
   </div>
  <Footer/>
    </div>
   
   
     </>
  
}

export default Home