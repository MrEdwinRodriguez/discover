import React from 'react';
import pic1 from '../../../img/social/100/1.jpg';
import pic2 from '../../../img/social/100/2.jpg';
import pic3 from '../../../img/social/100/3.jpg';
const text = 'Late Night Show Photos'

const BlockBody = () => {
    <div className="panel-body">
        <p>{{text}}</p>
        <div className="timeline-added-images">
            <img src={{pic1}} width="80" alt="photo" />
            <img src={{pic2}} width="80" alt="photo" />
            <img src={{pic3}} width="80" alt="photo" />
        </div>
    </div>
};

export default BlockBody