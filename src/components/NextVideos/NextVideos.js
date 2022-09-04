import './NextVideos.scss';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

function NextVideos(props) {
  const [ videoId, setVideoId ] = useState(props.currentVideoId);

  useEffect(() => {
    setVideoId(props.currentVideoId);
  }, [props]);

  
  if (!videoId) { // while we wait for api call to complete with default video id scenario
    return (
      <span>Loading....</span>
    );
  }
  else {
    return (
      <div className="nextvideo__container">
        <h4 className="nextvideo__sectiontitle">NEXT VIDEOS</h4>        
        {props.videosData.map((thumb) =>
          <Link to={`/${thumb.id}`} key={thumb.id} className={`nextvideo ${(videoId === thumb.id) ? "nextvideo--active" : ""}`}>                        
              <img className="nextvideo__thumbnail"src = {thumb.image} alt={thumb.title}/>
              <div className="nextvideo__text">
                <h2 className="nextvideo__title">{thumb.title}</h2>
                <h3 className="nextvideo__author">{thumb.channel}</h3>
              </div>
          </Link>
        )}
      </div>
    );
  }
}


export default NextVideos

//||((thumb.id === "84e96018-4022-434e-80bf-000ce4cd12b8")&&(props.currentVideoId===undefined))