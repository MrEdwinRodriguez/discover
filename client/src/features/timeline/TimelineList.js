import React, { Fragment } from 'react';
import BlockList from './block/BlockList';
import Jumbotron from '../../components/Jumbotron.js';
import Sidebar from '../../components/Sidebar';
import Navbar from '../../components/Navbar'
  //dummy data
  const blockArray = [{
      name: "Michelle",
      date: "15th January, 2014",
      text: 'Late Night Show Photos'
    },{
      name: "Tommy",
      date: "17th January, 2014",
      text: 'Had so much fun with everyone'
    },
    {
      name: "Jen",
      date: "18th January, 2014",
      text: 'Work was so hard today'
    },

  ]

const TimelineList = () => {
  return (
    <Fragment>
      <Sidebar />
      <div className="st-pusher" id="content">
        <div className="st-content">
          <div className="st-content-inner">
            <Navbar/>
            <Jumbotron/>
            <div className="container-fluid">
                <div className="timeline row" data-toggle="isotope">
                    <div className="col-xs-12 col-md-6 col-lg-4 item">
                        <div className="timeline-block">
                          <div className="panel panel-default share clearfix-xs">
                            <div className="panel-heading panel-heading-gray title">
                              What&acute;s new
                            </div>
                            <div className="panel-body">
                              <textarea name="status" className="form-control share-text" rows="3" placeholder="Share your status..."></textarea>
                            </div>
                            <div className="panel-footer share-buttons">
                              <a href="#"><i className="fa fa-map-marker"></i></a>
                              <a href="#"><i className="fa fa-photo"></i></a>
                              <a href="#"><i className="fa fa-video-camera"></i></a>
                              <button type="submit" className="btn btn-primary btn-xs pull-right display-none" href="#">Post</button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <BlockList blockArray={blockArray}/>
                </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default TimelineList