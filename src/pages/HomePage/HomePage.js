import Video from '../../components/Video/Video';
import NextVideos from '../../components/NextVideos/NextVideos';
import Comments from '../../components/Comments/Comments';
import Description from '../../components/Description/Description';

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