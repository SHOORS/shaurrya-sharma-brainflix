import './Description.scss';

import { useState } from "react";

function Description(props) {

  let datefromtimestamp = new Date(props.videoDetailsData[props.currentVideoId].timestamp);
  let putdate = datefromtimestamp.toLocaleDateString("en-US", {year: "numeric", month: "2-digit", day: "2-digit"})

    return (
      <div className="description">
        <h1 className="description__title">
            {props.videoDetailsData[props.currentVideoId].title}
        </h1>
        <div className="description__info">
            <div className="description__info-left">
                <div className="description__author">{props.videoDetailsData[props.currentVideoId].channel}</div>
                <div className="description__date">{putdate}</div>
            </div>
            <div className="description__info-right">
                <div className="description__views">{props.videoDetailsData[props.currentVideoId].views}</div>
                <div className="description__likes">{props.videoDetailsData[props.currentVideoId].likes}</div>
            </div>
        </div>
        <p className="description__paragraph">
          {props.videoDetailsData[props.currentVideoId].description}
        </p>
      </div>
    );
  }

export default Description