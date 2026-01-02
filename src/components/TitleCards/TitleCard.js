import React, { useEffect, useState } from 'react'
import './TitleCard.css'
import Cards_data from '../../assets/Cards/Cards_data'
import { Link } from 'react-router-dom'
const TitleCard = ({title,catagery}) => {
  const [apiData,setApiData]=useState([]);
   const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNzBlOWNlNzQ0MjgzMWNiYjZjY2IzNzg1ODhkZGM5NyIsIm5iZiI6MTc1NzMxNDIxMy4zNDUsInN1YiI6IjY4YmU3Y2E1MjFhMDIzZGY4YTljMGFmYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.m1GcMN413EQOA8tGu_y_zBvYtWEo8V8CP7T0e1cPEWk'
  }
};
useEffect(()=>{
fetch(`https://api.themoviedb.org/3/movie/${catagery?catagery:"now_playing"}?language=en-US&page=1`, options)
  .then(res => res.json())
  .then(res => setApiData(res.results))
  .catch(err => console.error(err));},)
  return (  
    <div className='titleCard'>
       <h2>{title?title: "Popular On Netflix"}</h2>
      <div className='card_list'>
          {apiData.map((Card,index)=>{
            return  <Link to={`/player/${Card.id}`} className='card' key={index}>
              <img src={`https://image.tmdb.org/t/p/w500`+Card.backdrop_path} alt=''/>
               <div className='play-button'>▶</div>
              <p>{Card.original_title}</p>
              </Link>
              
          })}
      </div>
    </div>
  )
}

export default TitleCard