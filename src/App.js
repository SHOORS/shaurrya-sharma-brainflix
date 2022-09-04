import './App.scss'
import {BrowserRouter, Routes, Route} from "react-router-dom";

import Header from "./components/Header/Header";
import Search from "./components/Search/Search";
import Upload from './components/Upload/Upload';
import VideoPage from './pages/VideoPage/VideoPage';
import UploadPage from './pages/UploadPage/UploadPage';

function App() {

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
                <VideoPage/>
              } 
            />
            <Route path="/:videoId"
              element={
                <VideoPage/>
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