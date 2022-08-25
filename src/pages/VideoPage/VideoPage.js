import { useState, useEffect} from "react";
import { Navigate } from 'react-router-dom';
import axios from 'axios';

import Video from '../../components/Video/Video';
import NextVideos from '../../components/NextVideos/NextVideos';
import Comments from '../../components/Comments/Comments';
import Description from '../../components/Description/Description';
import { useParams } from 'react-router-dom';

function VideoPage(props) {

    const [videoDetailsData, setVideoDetailsData] = useState({});
    const { videoId } = useParams(); 
    const currentVideoId = videoId; 
    const videoDetailsURL = `https://project-2-api.herokuapp.com/videos/${videoId}?api_key=9956a51b-0497-4686-b588-e60d5461f863`; 
    
    useEffect(() => {        
        axios.get(videoDetailsURL)
            .then(response => {
                setVideoDetailsData(response.data);            
            })
    }, [videoId])
    
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
                        currentVideoId={currentVideoId}                        
                        videosData={props.videosData}                        
                     />
                </div>
            </div>
        </>
    );
  }

export default VideoPage