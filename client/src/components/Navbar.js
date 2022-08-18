import React from 'react';
import { Link } from 'react-router-dom';
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
              <li className="active"><Link to="/"><i className="fa fa-fw icon-ship-wheel"></i> Timeline</Link></li>
              <li><Link to="/about"><i className="fa fa-fw icon-user-1"></i> About</Link></li>
              <li><Link to="/friends"><i className="fa fa-fw fa-users"></i> Friends</Link></li>
              <li><Link to="/record" type='button'><i class="fa fa-microphone" aria-hidden="true"></i> Record</Link></li>
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