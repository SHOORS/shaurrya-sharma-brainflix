import './Video.scss';

function Video(props) {
    return (
      <div className="video">
        <video controls poster = {props.videoDetailsData.image} className="video__player"/>        
      </div>
    );
  }

export default Video