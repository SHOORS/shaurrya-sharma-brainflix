import './Video.scss';

import { useState } from "react";

//import arrow from '../../assets/images/icons/upload.svg'

function Video(props) {
  
  let currentVideo = props.videoDetailsData.find(video => video.id === props.currentVideoId);

    return (
      <div className="video">
        <video controls poster = {currentVideo.image} className="video__player"/>
        
      </div>
    );
  }


export default Video