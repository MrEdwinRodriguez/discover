import React, {Fragment} from 'react';

const BlockComment = () => {
    <Fragment>
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
                    <img src="images/people/50/guy-5.jpg" className="media-object" />
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
                    <img src="images/people/50/woman-5.jpg" className="media-object" />
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
                    <img src="images/people/50/guy-5.jpg" className="media-object" />
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
    </Fragment>
};

export default BlockComment;