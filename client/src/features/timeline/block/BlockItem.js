import React, {Fragment} from 'react';

// TEMP PICS
import profilePic from '../../../img/people/50/woman-2.jpg';
import pic1 from '../../../img/social/100/1.jpg';
import pic2 from '../../../img/social/100/2.jpg';
import pic3 from '../../../img/social/100/3.jpg';
import pic4 from '../../../img/people/50/guy-5.jpg';
import pic5 from '../../../img/people/50/woman-5.jpg';

const BlockItem = () => {
	// TEMP DATA
	const name = "Michelle";
	const date = "15th January, 2014";
	const postText = 'Late Night Show Photos';

  	return (
  //   <div className="col-xs-12 col-md-6 col-lg-4 item" style={{position: "absolute", left: "391px", top: "0px"}} >
    <div className="col-xs-12 col-md-6 col-lg-4 item"  >
      <div className="timeline-block">
        <div className='panel panel-default'>
        {/* Block heading */}
          <div className="panel-heading">
            <div className="media">
              <div className="media-left">
                <a href="">
                  <img src={pic5} className="media-object" />
                </a>
              </div>
              <div className="media-body">
                <a href="#" className="pull-right text-muted"><i className="icon-reply-all-fill fa fa-2x "></i></a>
                <a href="">{name}</a>
                <span>on {date}</span>
              </div>
            </div>
          </div>
          {/* block body */}
          <div className="panel-body">
              <p>{postText}</p>
              <div className="timeline-added-images">
                  <img src={pic1} width="80" alt="photo" />
                  <img src={pic2} width="80" alt="photo" />
                  <img src={pic3} width="80" alt="photo" />
              </div>
          </div>
          {/* block comments */}
          <div className="view-all-comments">
            	<a href="#">
                <i className="fa fa-comments-o"></i> View all
                </a>
                <span>10 comments</span>
          	</div>
          	<ul className="comments">
            	<li className="media">
                  	<div className="media-left">
						<a href="">
						<img src={pic4} className="media-object" />
						</a>
                  	</div>
                  	<div className="media-body">
						<div className="pull-right dropdown" data-show-hover="li" style={{display: "none"}}>
						<a href="#" data-toggle="dropdown" className="toggle-button">
							<i className="fa fa-pencil"></i>
						</a>
						<ul className="dropdown-menu" role="menu">
							<li><a href="#">Edit</a></li>
							<li><a href="#">Delete</a></li>
						</ul>
                      </div>
						<a href="" className="comment-author pull-left">Bill D.</a>
						<span>Hi Mary, Nice Party</span>
						<div className="comment-date">21st September</div>
                  	</div>
              	</li>
              	<li className="media">
					<div className="media-left">
						<a href="">
						<img src={pic5} className="media-object" />
						</a>
					</div>
					<div className="media-body">
						<div className="pull-right dropdown" data-show-hover="li" style={{display: "none"}}>
						<a href="#" data-toggle="dropdown" className="toggle-button">
							<i className="fa fa-pencil"></i>
						</a>
						<ul className="dropdown-menu" role="menu">
							<li><a href="#">Edit</a></li>
							<li><a href="#">Delete</a></li>
						</ul>
						</div>
						<a href="" className="comment-author pull-left">Mary</a>
						<span>Thanks Bill</span>
						<div className="comment-date">2 days</div>
					</div>
                </li>
                <li className="media">
                    <div className="media-left">
                        <a href="">
                        <img src={pic4} className="media-object" />
                        </a>
                    </div>
                    <div className="media-body">
                        <div className="pull-right dropdown" data-show-hover="li" style={{display: "none"}}>
                        <a href="#" data-toggle="dropdown" className="toggle-button">
                            <i className="fa fa-pencil"></i>
                        </a>
                        <ul className="dropdown-menu" role="menu">
                            <li><a href="#">Edit</a></li>
                            <li><a href="#">Delete</a></li>
                        </ul>
                        </div>
                        <a href="" className="comment-author pull-left">Bill D.</a>
                        <span>What time did it finish?</span>
                        <div className="comment-date">14 min</div>
                    </div>
                </li>
                <li className="comment-form">
                	<div className="input-group">
						<span className="input-group-btn">
							<a href="" className="btn btn-default"><i className="fa fa-photo"></i></a>
						</span>
						<input type="text" className="form-control" />
            		</div>
            	</li>
          	</ul>
        </div>
      </div>
    </div>
  )
}

export default BlockItem;