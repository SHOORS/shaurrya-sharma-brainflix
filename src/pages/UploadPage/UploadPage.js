import './UploadPage.scss';
import { Link } from 'react-router-dom';
import preview from "../../assets/images/images/Upload-video-preview.jpg"

function UploadPage() {

    return (
        <div className="uploadPage">
            <h1 className="uploadPage__title">Upload Video</h1>
            <div className="uploadPage__content">
                <div className="uploadPage__content-left">
                    <h3 className="uploadPage__label">
                        VIDEO THUMBNAIL
                    </h3>
                    <img className="uploadPage__image" src={preview}></img>
                </div>
                <form className="uploadPage__content-right">
                    <h3 className="uploadPage__label">
                        TITLE YOUR VIDEO
                    </h3>
                    <input type="text" placeholder="Add a title to your video" className="uploadPage__titleinput" id="title"/>
                    <h3 className="uploadPage__label">
                        ADD A VIDEO DESCRIPTION
                    </h3>
                    <textarea id="description" type="text" className="uploadPage__descriptioninput" placeholder="Add a description to your video"></textarea>
                </form>
            </div>
            <div className="uploadPage__bottom">
                <Link to="/">
                    <button onClick={(()=>alert("Video Successfully Uploaded!"))} className="uploadPage__publishBtn">PUBLISH</button>
                </Link>
                <button className="uploadPage__cancelBtn">CANCEL</button>
            </div>
        </div>
    );
  }

export default UploadPage