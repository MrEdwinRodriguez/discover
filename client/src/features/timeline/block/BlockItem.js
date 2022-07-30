import React, {Fragment} from 'react';
import BlockHeading from './BlockHeading';
import BlockBody from './BlockBody';
import BlockComment from './BlockComment';

const BlockItem = () => {
  return (
  //   <div className="col-xs-12 col-md-6 col-lg-4 item" style={{position: "absolute", left: "391px", top: "0px"}} >
    <div className="col-xs-12 col-md-6 col-lg-4 item"  >
      <div className="timeline-block">
        <div className='panel panel-default'>
          <BlockHeading /> 
          <BlockBody />
          <BlockComment />
        </div>
      </div>
    </div>
  )
}

export default BlockItem