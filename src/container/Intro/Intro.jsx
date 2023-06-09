import React, { useState, useRef } from 'react';
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs'

import './Intro.css';
import { meal } from '../../constants';


const Intro = () => {
  const [playVideo, setPlayVideo] = useState(false)
  const videoRef = useRef()

  const handleVideoClick = () => {
    setPlayVideo((preVPlayVideo) => !preVPlayVideo)

    if(playVideo) {
      videoRef.current.pause()
    } else {
      videoRef.current.play()
    }
  }

  return (
    <div className='app__video'>
      <video 
        src={meal}
        ref={videoRef}
        loop
        type='video/mp4'
        controls={false}
        muted
      />
      <div className='app__video-overlay flex__center'>
        <div className='app__video-overlay_circle flex__center' 
          onClick={handleVideoClick}
        >
          {playVideo ? (
            <BsPauseFill color='#fff' fontSize={30} />
          ) : (
            <BsFillPlayFill color='#fff' fontSize={30} />
          )}
        </div>
      </div>
    </div>
  )
}

export default Intro;
