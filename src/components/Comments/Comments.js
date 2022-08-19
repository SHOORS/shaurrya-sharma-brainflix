import './Comments.scss';

import mrmohan from '../../assets/images/images/Mohan-muruge.jpg'



function Comments(props) {

  const getDate = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleDateString("en-US", {year: "numeric", month: "2-digit", day: "2-digit"});
  }
 
    return (
      <div className="comments">
        <h3 className="comments__number">{props.videoDetailsData[props.currentVideoId].comments.length} Comments</h3>
        <form className = "comments__form">
            <div className="comments__form-left">
                <img className ="comments__image"src={mrmohan}/>
            </div>
            <div className="comments__form-right">
                <input type="text"></input>
                <button>COMMENT</button>
            </div>
        </form>
        <div className="comments__posted">
            <div className="comments__card">
              {props.videoDetailsData[props.currentVideoId].comments.map((comment, index) =>
                <div key={comment.timestamp}  className="comments__item">
                  <h4>{comment.name}</h4>                  
                  <span>{getDate(comment.timestamp)}</span>
                  <p>{comment.comment}</p>
                </div>
              )}
            </div>
        </div>
      </div>
    );
  }


export default Comments