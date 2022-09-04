import './UploadPage.scss';
import { useNavigate } from 'react-router-dom';
import preview from "../../assets/images/images/Upload-video-preview.jpg"
import { useState } from 'react';
import axios from 'axios';

function UploadPage() {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    let navigate = useNavigate();

    function handleSubmit(event) {
        event.preventDefault();
        const url = 'http://localhost:8080/videos/upload';        
        const formData = {
            title: title,
            description: desc
        };
        const config = {
          headers: {
            'content-type': 'application/json',
          },
        };        
        axios.post(url, formData, config)
            .then(() => {                
                alert("Video Successfully Uploaded!");                
                navigate("/");              
            })
            .catch(err => {
                alert("Sorry something went wrong");
                console.error(err);        
            });
    }    
   
    return (
        <div className="uploadPage">
            <h1 className="uploadPage__title">Upload Video</h1>
            <div className="uploadPage__content">
                <div className="uploadPage__content-left">
                    <h3 className="uploadPage__label">
                        VIDEO THUMBNAIL
                    </h3>
                    <img className="uploadPage__image" src={preview} alt="cycling person looking down towards a dreary ashphalt road"></img>
                </div>
                <form onSubmit={handleSubmit} className="uploadPage__content-right">
                    <h3 className="uploadPage__label">
                        TITLE YOUR VIDEO
                    </h3>
                    <input 
                        type="text" 
                        placeholder="Add a title to your video" 
                        className="uploadPage__titleinput" 
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <h3 className="uploadPage__label">
                        ADD A VIDEO DESCRIPTION
                    </h3>
                    <textarea 
                        id="description" 
                        type="text" 
                        className="uploadPage__descriptioninput" 
                        placeholder="Add a description to your video"
                        value={desc}
                        onChange={(e) => setDesc(e.target.value)}
                    >
                    </textarea>
                    <div className="uploadPage__bottom">
                        {/* <Link to="/"> */}
                            <button type="submit" className="uploadPage__publishBtn">PUBLISH</button>
                        {/* </Link> */}
                        <button className="uploadPage__cancelBtn">CANCEL</button>
                    </div>
                </form>
            </div>
        </div>
    );
  }

export default UploadPage