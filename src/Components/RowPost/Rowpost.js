import React, { useEffect, useState } from 'react'
import "./Rowpost.css";
import axios from "../../axios" ;
import {API_KEY, imageUrl} from '../../Constants/Constants';
import YouTube from 'react-youtube';

function Rowpost(props) {
  const [movies,setMovies] = useState([])
  const [urlId,setUrlId] = useState('')
  useEffect(()=>{
    axios.get(props.url).then(response=>{
      setMovies(response.data.results)
      console.log(response.data)
    }).catch(err=>{
      alert('Network error')
    })
  },[])
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
    
  };
  const handleMovies = (id)=>{
      console.log(id)
      axios.get(`movie/${id}/videos?api_key=${API_KEY}&language=en_US`).then(response=>{
      if (response.data.results.length !==0){
        setUrlId(response.data.results[0].key)
      }else{
        console.log('Array is empty')

      }
    })
    }
  return (
    <div className='row'>
      <h2>{props.title}</h2>
      <div className='posters'>
        { movies.map((obj) =>
        <img  className={props.isSmall ? 'smallPoster' :'poster'} src={`${imageUrl+obj.backdrop_path}`} alt='poster' onClick={()=>handleMovies(obj.id)}></img>
  )}
      </div>
    { urlId &&  <YouTube videoId= {urlId.key} opts={opts}  /> }
    </div>
  )
}

export default Rowpost
