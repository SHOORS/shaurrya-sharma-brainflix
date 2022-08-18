import './App.scss'
import Comments from './components/Comments/Comments';
import Description from './components/Description/Description';


import Header from "./components/Header/Header";
import Search from "./components/Search/Search";
import Upload from './components/Upload/Upload';
import Video from './components/Video/Video';

import joemama from './data/videos.json'
import joepapa from './data/video-details.json'


function App() {
  return (
    <div className="App">
      <Header/>
      <Search/>
      <Upload/>
      <Video/>
      <Description/>
      <Comments/>
    </div>
  );
}

export default App;



console.log((joemama[0].title), (joepapa))
