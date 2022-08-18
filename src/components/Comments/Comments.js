import './Comments.scss';

import mrmohan from '../../assets/images/images/Mohan-muruge.jpg'



function Comments() {
    return (
      <div className="comments">
        <h3 className="comments__number">3 Comments</h3>
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
                ello youchube
            </div>
        </div>
      </div>
    );
  }


export default Comments