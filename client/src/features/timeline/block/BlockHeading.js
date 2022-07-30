import React from 'react'
import profilePic from '../../../img/people/50/woman-2.jpg';

// placeholder data
const name = 'Michelle'
const date = 'on 15th January, 2014'

const BlockHeading = () => {
  return (
    <div className="panel-heading">
      <div className="media">
        <div className="media-left">
          <a href="">
            <img src={profilePic} className="media-object" />
          </a>
        </div>
        <div className="media-body">
          <a href="#" className="pull-right text-muted"><i className="icon-reply-all-fill fa fa-2x "></i></a>
          <a href="">Michelle</a>
          <span>on 15th January, 2014</span>
        </div>
      </div>
    </div>
  )
}

export default BlockHeading