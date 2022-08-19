import './NextVideos.scss';

import { useState } from "react";


function NextVideos(props) {

  const selectVideo = (videoIndex) => {
    props.setCurrentVideo(videoIndex)
  };



    return (
      <div className="nextvideos">
        {props.videosData.map((thumb, index) =>
          <div key={thumb.id}
            className={`nextvideo ${props.currentVideoId === index ? "nextvideo--active" : ""}`}
            onClick={() => selectVideo(index)}
          >
            <img className="nextvideo__thumbnail"src = {thumb.image}/>
            <h2 className="nextvideo__title">{thumb.title}</h2>
            <h3 className="nextvideo__author">{thumb.channel}</h3>
          </div>
        )}
      </div>
    );
  }


export default NextVideos