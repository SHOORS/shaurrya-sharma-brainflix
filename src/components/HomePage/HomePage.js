import Video from '../Video/Video';
import NextVideos from '../NextVideos/NextVideos';
import Comments from '../Comments/Comments';
import Description from '../Description/Description';

function HomePage(props) {

    return (
        <>
            <Video            
                videoDetailsData={props.videoDetailsData} 
            />
            <div className="desktop-split">
                <div className="desktop-split__left">
                    <Description                        
                        videoDetailsData={props.videoDetailsData} 
                    />
                    <Comments                        
                        videoDetailsData={props.videoDetailsData} 
                    />
                </div>
                <div className="desktop-split__right">
                    <NextVideos
                        currentVideoId={props.currentVideoId}
                        videosData={props.videosData}                        
                     />
                </div>
            </div>
        </>
    );
  }

export default HomePage