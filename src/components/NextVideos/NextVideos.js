import './NextVideos.scss';

import { useState } from "react";


function NextVideos(props) {

  const selectVideo = (videoIndex) => {
    props.setCurrentVideo(videoIndex)
  };

  // let currentVideo = props.videosData.find(video => video.id === props.currentVideoId);

    return (
      <div className="nextvideos">
        {props.videosData.map((thumb) =>
          <div key={thumb.id}
            className={`nextvideo ${props.currentVideoId === thumb.id ? "nextvideo--active" : ""}`}
            onClick={() => selectVideo(thumb.id)}
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