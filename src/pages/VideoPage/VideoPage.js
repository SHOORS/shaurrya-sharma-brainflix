import { useState, useEffect} from "react";
import { useParams } from 'react-router-dom';
import axios from 'axios';

import Video from '../../components/Video/Video';
import NextVideos from '../../components/NextVideos/NextVideos';
import Comments from '../../components/Comments/Comments';
import Description from '../../components/Description/Description';

function VideoPage() {

    const [videoDetailsData, setVideoDetailsData] = useState({});
    let params = useParams();
    const [videoId, setVideoId ] = useState(params.videoId);
    const [videosData, setVideosData] = useState([]);
    const [defaultVideoDetailsData, setDefaultVideoDetailsData] = useState({});
    const [defaultVideoId, setDefaultVideoId] = useState("");

    // API URLs
    const videosAPIURL = "http://localhost:8080/videos";
    function getVideoDetailsURL (videoId) {
        return `http://localhost:8080/videos/${videoId}`;
    }; 

    useEffect(() => { // setting default video data
        axios.get(videosAPIURL)
            .then(response => {
                setVideosData(response.data);
                setDefaultVideoId(response.data[0].id);
                return response.data[0].id;
            })            
            .then((defaultId) => {               
                axios.get(getVideoDetailsURL(defaultId))
                .then(response => {
                    setDefaultVideoDetailsData(response.data);
                })
                .catch(err => console.error(err));
            })
            .catch(err => console.error(err));
    }, [])

    
    useEffect(() => { // swapping between default and new video data
        setVideoId(params.videoId); 
        // setting state takes time
        // therefore we are using params.videoId since its readily available
        if (!params.videoId || params.videoId === defaultVideoId) { // use default video data
            setVideoDetailsData(defaultVideoDetailsData);     
            setVideoId(defaultVideoId);
        } else { // use new video data
            axios.get(getVideoDetailsURL(params.videoId))
                .then(response => {
                    setVideoDetailsData(response.data);
                })
                .catch(err => console.error(err)); 
        }
    }, [params, defaultVideoId, defaultVideoDetailsData])

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
                        videosData={videosData}                        
                     />
                </div>
            </div>
        </>
    );
  }

export default VideoPage