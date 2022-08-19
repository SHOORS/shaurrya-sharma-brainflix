import './App.scss'

import { useState } from "react";
import Comments from './components/Comments/Comments';
import Description from './components/Description/Description';


import Header from "./components/Header/Header";
import Search from "./components/Search/Search";
import Upload from './components/Upload/Upload';
import Video from './components/Video/Video';

import videosData from './data/videos.json'
import videoDetailsData from './data/video-details.json'
import NextVideos from './components/NextVideos/NextVideos';


function App() {

  // let currentVideoId = 1;

  const [currentVideoId, setCurrentVideo] = useState(0);

  return (
    <div className="App">
      <Header/>
      <Search/>
      <Upload/>
      <Video
        currentVideoId = {currentVideoId}
        videoDetailsData = {videoDetailsData}
      />
      <Description
        currentVideoId = {currentVideoId}
        videoDetailsData = {videoDetailsData}
      />
      <Comments
        currentVideoId = {currentVideoId}
        videoDetailsData = {videoDetailsData}
        />
      <NextVideos
        currentVideoId = {currentVideoId}
        videosData = {videosData}
        setCurrentVideo = {setCurrentVideo}
      />
    </div>
  );
}

export default App;

console.log(videosData, videoDetailsData)


