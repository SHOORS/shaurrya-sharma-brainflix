import './Search.scss';

import dude from '../../assets/images/images/Mohan-muruge.jpg'


function Search() {
    return (
      <div className="search">
        <input className="search__bar" type = "text" placeholder="Search"></input>
        <img src={dude} className="search__image" />
      </div>
    );
  }


export default Search