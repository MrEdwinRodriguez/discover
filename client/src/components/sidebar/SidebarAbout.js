import React, {Fragment} from 'react'


const SidebarAbout = ({profile}) => {
  return (
    <Fragment>
        <div className="category">About</div>
        <div className="sidebar-block">
            <ul className="list-about">
                <li><i className="fa fa-map-marker"></i> {profile.city}, {profile.state}</li>
                {profile && profile.social && profile.social.twitter ? <li><i className="fa fa-link"></i> <a href="#">{profile.social.twitter}</a></li> : "" }
                {profile && profile.social && profile.social.facebook ? <li><i className="fa fa-link"></i> <a href="#">{profile.social.facebook}</a></li> : "" }
                {profile && profile.social && profile.social.instagram ? <li><i className="fa fa-link"></i> <a href="#">{profile.social.instagram}</a></li> : "" }
                {profile && profile.social && profile.social.youtube ? <li><i className="fa fa-link"></i> <a href="#">{profile.social.youtube}</a></li> : "" }
                {profile && profile.social && profile.social.linkedin ? <li><i className="fa fa-link"></i> <a href="#">{profile.social.linkedin}</a></li> : "" }
                {profile && profile.social && profile.social.tiktok ? <li><i className="fa fa-link"></i> <a href="#">{profile.social.tiktok}</a></li> : "" }
            </ul>
        </div>
    </Fragment>
  )
};

export default SidebarAbout