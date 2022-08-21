import './Upload.scss';

import dude1 from '../../assets/images/images/Mohan-muruge.jpg'

function Upload() {
    return (
      <div className="upload">
        <button className='upload__button'>UPLOAD</button>
        <img src={dude1} className="upload__image" />
      </div>
    );
  }


export default Upload