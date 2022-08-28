import { useState, useEffect} from "react";
import axios from 'axios';

import Video from '../../components/Video/Video';
import NextVideos from '../../components/NextVideos/NextVideos';
import Comments from '../../components/Comments/Comments';
import Description from '../../components/Description/Description';
import { useParams } from 'react-router-dom';

function VideoPage(props) {

    const [videoDetailsData, setVideoDetailsData] = useState({});
    let { videoId } = useParams();     
    // const [currentVideoId, setCurrentVideoId]  = useState("");
    const videoDetailsURL = `https://project-2-api.herokuapp.com/videos/${videoId}?api_key=9956a51b-0497-4686-b588-e60d5461f863`; 
    
    useEffect(() => {    
        if (videoId) {              
            axios.get(videoDetailsURL)
                .then(response => {
                    setVideoDetailsData(response.data);            
                })        
        } else {            
            setVideoDetailsData(props.videoDetailsData);            
            videoId = props.currentVideoId;
        }
    }, [videoId, props])

    return (
        <>
            <Video            
                videoDetailsData={videoDetailsData} 
            />
            <div className="desktop-split">
                <div className="desktop-split__left">
                    <Description                        
                        videoDetailsData={videoDetailsData} 
                    />
                    <Comments                        
                        videoDetailsData={videoDetailsData} 
                    />
                </div>
                <div className="desktop-split__right">
                    <NextVideos
                        currentVideoId={videoId}                        
                        videosData={props.videosData}                        
                     />
                </div>
            </div>
        </>
    );
  }

export default VideoPage