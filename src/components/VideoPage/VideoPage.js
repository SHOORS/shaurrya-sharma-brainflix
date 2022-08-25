import Video from '../Video/Video';
import NextVideos from '../NextVideos/NextVideos';
import Comments from '../Comments/Comments';
import Description from '../Description/Description';
import { useParams } from 'react-router-dom';

function VideoPage(props) {

    const { videoId } = useParams(); // param id
    const currentVideoId = props.currentVideoId; // TODO: this is incorrect, needs to be changed to use param id
    const videoDetailsData = props.videoDetailsData; // TODO: this is incorrect, needs to be changed to make a new api call based on param id

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