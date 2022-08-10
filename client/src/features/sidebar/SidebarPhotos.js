import React, {Fragment} from 'react'


const SidebarPhotos = () => {
  return (
    <Fragment>
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
      </Fragment>

  )
}

export default SidebarPhotos