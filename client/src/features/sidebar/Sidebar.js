import React, {Fragment} from 'react'
import { selectCurrentUser} from '../../features/user/userSlice';
import { useSelector } from 'react-redux';
import SidebarAbout from './SidebarAbout';
import SidebarPhotos from './SidebarPhotos';
import SidebarActivity from './SidebarActivity';

const Sidebar = () => {
    const currentUser = useSelector(selectCurrentUser);
    const profile = currentUser && currentUser.profile ? currentUser.profile : null;
    console.log(profile)
  return (
    <div id="sidebar-menu" className="sidebar left sidebar-size-2 sidebar-offset-0 sidebar-visible-desktop sidebar-visible-mobile sidebar-skin-dark">
        <div data-scrollable tabIndex='0' >
            <div className="sidebar-block">
                <div className="profile">
                    <img src="images/people/110/guy-6.jpg" alt="people" className="img-circle"/>
                    <h4>{currentUser.full_name}</h4>
                </div>
            </div>
            { profile ? <SidebarAbout profile={profile} /> : <div className="category">Create Profile</div>}
            { profile ? <SidebarPhotos profile={profile}/>  : " "}
            { profile ? <SidebarActivity profile={profile}/> : " "}
        </div>
    </div>
  )
}

export default Sidebar
