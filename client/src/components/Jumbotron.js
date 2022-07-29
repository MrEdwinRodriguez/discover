import React from 'react';
import profileCover from '../img/profile-cover.jpg'

const Jumbotron = () => {
  return (
    <div className="cover overlay cover-image-full height-300-lg">
        <img src={profileCover} alt="cover" />
        <div className="overlay overlay-full">
        <div className="v-top">
            <a href="#" className="btn btn-cover"><i className="fa fa-pencil"></i></a>
        </div>
        </div>
    </div>
  )
}

export default Jumbotron