import React from 'react'

const Navbar = () => {
  return (
    <div id="sidebar-menu" className="sidebar left sidebar-size-2 sidebar-offset-0 sidebar-visible-desktop sidebar-visible-mobile sidebar-skin-dark">
        <div data-scrollable tabIndex='0' >
            <div className="sidebar-block">
                <div className="profile">
                    <img src="images/people/110/guy-6.jpg" alt="people" className="img-circle"/>
                    <h4>Adrian D.</h4>
                </div>
            </div>
            <div className="category">About</div>
            <div className="sidebar-block">
                <ul className="list-about">
                    <li><i className="fa fa-map-marker"></i> Amsterdam, NL</li>
                    <li><i className="fa fa-link"></i> <a href="#">www.mosaicpro.biz</a></li>
                    <li><i className="fa fa-twitter"></i> <a href="#">/mosaicprobiz</a></li>
                </ul>
            </div>
            <div className="category">Photos</div>
            <div className="sidebar-block">
                <div className="sidebar-photos">
                    <ul>
                        <li><a href="#"><img src="images/place1.jpg" alt="people"/></a></li>
                        <li><a href="#"><img src="images/place2.jpg" alt="people"/></a></li>
                        <li><a href="#"><img src="images/place3.jpg" alt="people"/></a></li>
                        <li><a href="#"><img src="images/food1.jpg" alt="people"/></a></li>
                        <li><a href="#"><img src="images/food1.jpg" alt="people"/></a></li>
                        <li><a href="#"><img src="images/place3.jpg" alt="people"/></a></li>
                        <li><a href="#"><img src="images/place2.jpg" alt="people"/></a></li>
                        <li><a href="#"><img src="images/place1.jpg" alt="people"/></a></li>
                    </ul>
                    <a href="#" className="btn btn-primary btn-xs">view all</a>
                </div>
            </div>
            <div className="category">Activity</div>
            <div className="sidebar-block">
                <ul className="sidebar-feed">
                    <li className="media">
                        <div className="media-left">
                            <span className="media-object">
                                <i className="fa fa-fw fa-bell"></i>
                            </span>
                        </div>
                        <div className="media-body">
                            <a href="" className="text-white">Adrian</a> just logged in
                            <span className="time">2 min ago</span>
                        </div>
                        <div className="media-right">
                            <span className="news-item-success"><i className="fa fa-circle"></i></span>
                        </div>
                    </li>
                    <li className="media">

                        <div className="media-left">
                            <span className="media-object">
                                <i className="fa fa-fw fa-bell"></i>
                            </span>
                        </div>
                        <div className="media-body">
                            <a href="" className="text-white">Adrian</a> just added  <a href="" className="text-white">mosaicpro</a> as their office
                            <span className="time">2 min ago</span>
                        </div>
                        <div className="media-right">
                            <span className="news-item-success"><i className="fa fa-circle"></i></span>
                        </div>
                    </li>
                    <li className="media">
                        <div className="media-left">
                            <span className="media-object">
                                <i className="fa fa-fw fa-bell"></i>
                            </span>
                        </div>
                        <div className="media-body">
                            <a href="" className="text-white">Adrian</a> just logged in
                            <span className="time">2 min ago</span>
                        </div>
                    </li>
                    <li className="media">
                        <div className="media-left">
                            <span className="media-object">
                                <i className="fa fa-fw fa-bell"></i>
                            </span>
                        </div>
                        <div className="media-body">
                            <a href="" className="text-white">Adrian</a> just logged in
                            <span className="time">2 min ago</span>
                        </div>
                    </li>
                    <li className="media">
                        <div className="media-left">
                            <span className="media-object">
                                <i className="fa fa-fw fa-bell"></i>
                            </span>
                        </div>
                        <div className="media-body">
                            <a href="" className="text-white">Adrian</a> just logged in
                            <span className="time">2 min ago</span>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Navbar
