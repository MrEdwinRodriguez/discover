import React, { Fragment } from 'react';
import BlockList from './block/BlockList';
import Jumbotron from '../../components/Jumbotron.js';
import Sidebar from '../sidebar/Sidebar';
import Navbar from '../../components/Navbar'
import BlockCreate from './block/BlockCreate';
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
                  <BlockCreate />
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