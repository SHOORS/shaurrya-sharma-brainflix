import './Video.scss';

import { useState } from "react";

//import arrow from '../../assets/images/icons/upload.svg'

function Video(props) {
    return (
      <div className="video">
        <video poster = {props.videoDetailsData[props.currentVideoId].image} className="video__player"/>
        
      </div>
    );
  }


export default Video