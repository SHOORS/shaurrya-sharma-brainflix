import './App.scss'
import { useState, useEffect} from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import axios from 'axios';

import Header from "./components/Header/Header";
import Search from "./components/Search/Search";
import Upload from './components/Upload/Upload';
import HomePage from './pages/HomePage/HomePage';
import VideoPage from './pages/VideoPage/VideoPage';
import UploadPage from './pages/UploadPage/UploadPage';

function App() {

  const [videosData, setVideosData] = useState([]);
  const [defaultVideoDetailsData, setDefaultVideoDetailsData] = useState({});
  const [defaultVideoId, setDefaultVideoId] = useState("");



  const videosAPIURL = "https://project-2-api.herokuapp.com/videos?api_key=9956a51b-0497-4686-b588-e60d5461f863"
  const getVideoDetailsAPIURL = (id) => {
    return `https://project-2-api.herokuapp.com/videos/${id}?api_key=9956a51b-0497-4686-b588-e60d5461f863`;
  };

  useEffect(() => {
    // get video Data
    axios.get(videosAPIURL)
      .then(response => {
        setVideosData(response.data);
        setDefaultVideoId(response.data[0].id);
        return response.data[0].id;
      })
      .then((defaultId) => {
        // get video details
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
                <HomePage
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