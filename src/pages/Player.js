import React, { useEffect, useState } from 'react'
import './Player.css'
import back_arrow from '../assets/left.png'
import { useNavigate, useParams } from 'react-router-dom'
const Player = () => {
const {id}=useParams();
const navigate = useNavigate();

const[apiData,setApiData]=useState({
    name:"",
    key:"",
    published_at:"",
    typeof:""
})
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNzBlOWNlNzQ0MjgzMWNiYjZjY2IzNzg1ODhkZGM5NyIsIm5iZiI6MTc1NzMxNDIxMy4zNDUsInN1YiI6IjY4YmU3Y2E1MjFhMDIzZGY4YTljMGFmYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.m1GcMN413EQOA8tGu_y_zBvYtWEo8V8CP7T0e1cPEWk'
  }
};
useEffect(()=>{
fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
  .then(res => res.json())
  .then(res => setApiData(res.results[0]))
  .catch(err => console.error(err));
},[])


  return (
    <div className='player'>
<img src={back_arrow}alt='' onClick={()=>{navigate(-1)}}/>
<iframe width='90%' height='90%'
 src={`https://www.youtube.com/embed/${apiData.key}`} title='trailer' frameBorder='0' allowFullScreen    ></iframe>
<div className='player-info'>
    <p>{apiData.published_at.slice(0,10)}</p>
    <p>{apiData.name}</p>
    <p>{apiData.type}</p>

</div>
    </div>
  )
}

export default Player

