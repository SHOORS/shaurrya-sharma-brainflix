import './NextVideos.scss';
import { Link } from 'react-router-dom';

function NextVideos(props) {

     return (
      <div className="nextvideo__container">
        <h4 className="nextvideo__sectiontitle">NEXT VIDEOS</h4>
        {props.videosData.map((thumb) =>
          <Link to={`/${thumb.id}`} key={thumb.id} className={`nextvideo ${props.currentVideoId === thumb.id ? "nextvideo--active" : ""}`}>                        
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


export default NextVideos