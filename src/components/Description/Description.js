import './Description.scss';
import eye from '../../assets/images/icons/views.svg'
import heart from '../../assets/images/icons/likes.svg'

function Description(props) {
  const getDate = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleDateString("en-US", {year: "numeric", month: "2-digit", day: "2-digit"});
  }

    return (
      <div className="description">
        <h1 className="description__title">
            {props.videoDetailsData.title}
        </h1>
        <div className="description__info">
            <div className="description__info-left">
                <div className="description__author">By {props.videoDetailsData.channel}</div>
                <div className="description__date">{getDate(props.videoDetailsData.timestamp)}</div>
            </div>
            <div className="description__info-right">
                <div className="description__views"><img alt="eye icon" src={eye} className="description__views-icon"/>{props.videoDetailsData.views}</div>
                <div className="description__likes"><img alt="heart icon" src={heart} className="description__likes-icon"/>{props.videoDetailsData.likes}</div>
            </div>
        </div>
        <p className="description__paragraph">
          {props.videoDetailsData.description}
        </p>
      </div>
    );
  }

export default Description