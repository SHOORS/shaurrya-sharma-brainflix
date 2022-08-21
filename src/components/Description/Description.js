import './Description.scss';
import eye from '../../assets/images/icons/views.svg'
import heart from '../../assets/images/icons/likes.svg'

// import { useState } from "react";

function Description(props) {

  let currentVideo = props.videoDetailsData.find(video => video.id === props.currentVideoId);

  const getDate = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleDateString("en-US", {year: "numeric", month: "2-digit", day: "2-digit"});
  }

  // let datefromtimestamp = new Date(props.videoDetailsData[props.currentVideoId].timestamp);
  // let putdate = datefromtimestamp.toLocaleDateString("en-US", {year: "numeric", month: "2-digit", day: "2-digit"})

    return (
      <div className="description">
        <h1 className="description__title">
            {currentVideo.title}
        </h1>
        <div className="description__info">
            <div className="description__info-left">
                <div className="description__author">By {currentVideo.channel}</div>
                <div className="description__date">{getDate(currentVideo.timestamp)}</div>
            </div>
            <div className="description__info-right">
                <div className="description__views"><img src={eye} className="description__views-icon"/>{currentVideo.views}</div>
                <div className="description__likes"><img src={heart} className="description__likes-icon"/>{currentVideo.likes}</div>
            </div>
        </div>
        <p className="description__paragraph">
          {currentVideo.description}
        </p>
      </div>
    );
  }

export default Description