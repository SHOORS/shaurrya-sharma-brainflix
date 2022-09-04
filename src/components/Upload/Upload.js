import './Upload.scss';
import { Link } from 'react-router-dom';

import dude1 from '../../assets/images/images/Mohan-muruge.jpg'

function Upload() {
    return (
      <div className="upload">
        <Link to="/upload">
          <button className='upload__button'>UPLOAD</button>
        </Link>  
        <img alt="profile for mohan muruge" src={dude1} className="upload__image" />
      </div>
    );
  }

export default Upload