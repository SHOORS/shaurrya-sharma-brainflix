import './Comments.scss';
import uniqid from "uniqid";

import mrmohan from '../../assets/images/images/Mohan-muruge.jpg'

function Comments(props) {

  const getDate = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleDateString("en-US", {year: "numeric", month: "2-digit", day: "2-digit"});
  }
 
    return (
      <div className="comments">
        <h3 className="comments__number">{props.videoDetailsData.comments?.length} Comments</h3>
        <form className = "comments__form">
            <div className="comments__form-left">
                <img alt="profile for mohan muruge" className ="comments__image"src={mrmohan}/>
            </div>
            <div className="comments__form-right">
                <div className="comments__input">
                  <label htmlFor="comment" className="comments__label">JOIN THE CONVERSATION</label>
                  <textarea id="comment" type="text" className="comments__box" placeholder="Add a new comment"></textarea>
                </div>  
                <button className="comments__button">COMMENT</button>
            </div>
        </form>
        <div className="comments__posted">
            <div className="comments__card">
              {props.videoDetailsData.comments?.map((comment, index) =>
                <div key={uniqid()}  className="comments__item">
                  <div className="comments__item-left"> 
                  {/* eslint-disable-next-line jsx-a11y/alt-text*/}
                    <img className="comments__postedimage"/>
                  </div>
                  <div className="comments__item-right">
                    <div className="comments__item-top">
                      <span className="comments__item-name">{comment.name}</span>                  
                      <span className="comments__item-date">{getDate(comment.timestamp)}</span>
                    </div>
                    <p className="comments__item-content">{comment.comment}</p>
                  </div>
                </div>
              )}
            </div>
        </div>
      </div>
    );
  }

export default Comments