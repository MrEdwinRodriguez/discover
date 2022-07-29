import React from 'react';
const Navbar = () => {
    return (
        <nav className="navbar navbar-subnav navbar-static-top margin-bottom-none" role="navigation">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#subnav">
              <span className="sr-only">Toggle navigation</span>
              <span className="fa fa-ellipsis-h"></span>
            </button>
          </div>
          <div className="collapse navbar-collapse" id="subnav">
            <ul className="nav navbar-nav ">
              <li className="active"><a href="index.html"><i className="fa fa-fw icon-ship-wheel"></i> Timeline</a></li>
              <li><a href="user-public-profile.html"><i className="fa fa-fw icon-user-1"></i> About</a></li>
              <li><a href="user-public-users.html"><i className="fa fa-fw fa-users"></i> Friends</a></li>
            </ul>
            <ul className="nav navbar-nav hidden-xs navbar-right ">
              <li><a href="#" data-toggle="chat-box">Chat <i className="fa fa-fw fa-comment-o"></i></a></li>
            </ul>
          </div>
        </div>

      </nav>
    )
  }
  
  export default Navbar