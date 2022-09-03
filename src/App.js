import './App.scss'
import { useState, useEffect} from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import axios from 'axios';

import Header from "./components/Header/Header";
import Search from "./components/Search/Search";
import Upload from './components/Upload/Upload';
import VideoPage from './pages/VideoPage/VideoPage';
import UploadPage from './pages/UploadPage/UploadPage';

function App() {

  const [videosData, setVideosData] = useState([]);
  const [defaultVideoDetailsData, setDefaultVideoDetailsData] = useState({});
  const [defaultVideoId, setDefaultVideoId] = useState("");

  const videosAPIURL = "http://localhost:8080/videos"
  const getVideoDetailsAPIURL = (id) => {
    return `http://localhost:8080/videos/${id}`;
  };

  useEffect(() => {    
    axios.get(videosAPIURL)
      .then(response => {
        console.log(response.data)
        setVideosData(response.data);
        setDefaultVideoId(response.data[0].id);
        return response.data[0].id;
      })
      .then((defaultId) => {               
        axios.get(getVideoDetailsAPIURL(defaultId))
          .then(response => {
            setDefaultVideoDetailsData(response.data);
          })
      })
  }, [])

  return (  
    <>
      <div className="App">
        <BrowserRouter>
          <div className="header__container">
            <Header/>
            <div className="header__container-right">
              <Search/>
              <Upload/>
            </div>
          </div> 
          <Routes>
            <Route path="/"
              element={
                <VideoPage
                  videoDetailsData={defaultVideoDetailsData}
                  currentVideoId={defaultVideoId}
                  videosData={videosData}
                />
              } 
            />
            <Route path="/:videoId"
              element={
                <VideoPage
                  videosData={videosData}                  
                />
              } 
            />
            <Route path="/upload"
              element={
                <UploadPage/>
              }
            />                   
          </Routes>  
        </BrowserRouter>      
      </div>
    </>
  );
}

export default App;