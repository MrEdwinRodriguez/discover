import React from 'react';
import place2Full from '../../img/place2-full.jpg';
import commentPerson1 from '../../img/people/50/woman-2.jpg';
import commentPerson2 from '../../img/people/50/guy-2.jpg';
import commentPerson3 from '../../img/people/50/guy-3.jpg';
import commentPerson4 from '../../img/people/50/woman-3.jpg';
import social from '../../img/social/100/1.jpg';


const Landing = () => {
  return (
    <div class="container-fluid">
        <div class="timeline row" data-toggle="isotope">
            <div class="col-xs-12 col-md-6 col-lg-4 item">
                <div class="timeline-block">
                  <div class="panel panel-default share clearfix-xs">
                    <div class="panel-heading panel-heading-gray title">
                      What&acute;s new
                    </div>
                    <div class="panel-body">
                      <textarea name="status" class="form-control share-text" rows="3" placeholder="Share your status..."></textarea>
                    </div>
                    <div class="panel-footer share-buttons">
                      <a href="#"><i class="fa fa-map-marker"></i></a>
                      <a href="#"><i class="fa fa-photo"></i></a>
                      <a href="#"><i class="fa fa-video-camera"></i></a>
                      <button type="submit" class="btn btn-primary btn-xs pull-right display-none" href="#">Post</button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-xs-12 col-md-6 col-lg-4 item">
                <div class="timeline-block">
                  <div class="panel panel-default relative">
                    <img src={place2Full} alt="place" class="img-responsive" />
                    <div class="panel-body panel-boxed text-center">
                      <div class="rating">
                        <span class="star"></span>
                        <span class="star filled"></span>
                        <span class="star filled"></span>
                        <span class="star filled"></span>
                        <span class="star filled"></span>
                      </div>
                    </div>
                    <div class="panel-body">
                      <img src={commentPerson1} alt="people" class="img-circle" />
                      <img src={commentPerson2} alt="people" class="img-circle" />
                      <img src={commentPerson3} alt="people" class="img-circle" />
                      <img src={commentPerson4} alt="people" class="img-circle" />
                      <a href="#" class="user-count-circle">12+</a>
                    </div>
                  </div>
                </div>
              </div>


              <div class="col-xs-12 col-md-6 col-lg-4 item">
                <div class="timeline-block">
                  <div class="panel panel-default">

                    <div class="panel-heading">
                      <div class="media">
                        <div class="media-left">
                          <a href="">
                            <img src={commentPerson1} class="media-object" />
                          </a>
                        </div>
                        <div class="media-body">
                          <a href="#" class="pull-right text-muted"><i class="icon-reply-all-fill fa fa-2x "></i></a>

                          <a href="">Michelle</a>

                          <span>on 15th January, 2014</span>
                        </div>
                      </div>
                    </div>

                    <div class="panel-body">
                      <p>Late Night Show Photos</p>
                      <div class="timeline-added-images">
                        <img src={social} width="80" alt="photo" />
                        <img src={social} width="80" alt="photo" />
                        <img src={social} width="80" alt="photo" />
                      </div>
                    </div>
                    <div class="view-all-comments">
                      <a href="#">
                        <i class="fa fa-comments-o"></i> View all
                      </a>
                      <span>10 comments</span>

                    </div>
                    <ul class="comments">
                      <li class="media">
                        <div class="media-left">
                          <a href="">
                            <img src={commentPerson2} class="media-object" />
                          </a>
                        </div>
                        <div class="media-body">
                          <div class="pull-right dropdown" data-show-hover="li">
                            <a href="#" data-toggle="dropdown" class="toggle-button">
                              <i class="fa fa-pencil"></i>
                            </a>
                            <ul class="dropdown-menu" role="menu">
                              <li><a href="#">Edit</a></li>
                              <li><a href="#">Delete</a></li>
                            </ul>
                          </div>
                          <a href="" class="comment-author pull-left">Bill D.</a>
                          <span>Hi Mary, Nice Party</span>
                          <div class="comment-date">21st September</div>
                        </div>
                      </li>
                      <li class="media">
                        <div class="media-left">
                          <a href="">
                            <img src={commentPerson3} class="media-object" />
                          </a>
                        </div>
                        <div class="media-body">
                          <div class="pull-right dropdown" data-show-hover="li">
                            <a href="#" data-toggle="dropdown" class="toggle-button">
                              <i class="fa fa-pencil"></i>
                            </a>
                            <ul class="dropdown-menu" role="menu">
                              <li><a href="#">Edit</a></li>
                              <li><a href="#">Delete</a></li>
                            </ul>
                          </div>
                          <a href="" class="comment-author pull-left">Mary</a>
                          <span>Thanks Bill</span>
                          <div class="comment-date">2 days</div>
                        </div>
                      </li>
                      <li class="media">
                        <div class="media-left">
                          <a href="">
                            <img src={commentPerson4} class="media-object" />
                          </a>
                        </div>
                        <div class="media-body">
                          <div class="pull-right dropdown" data-show-hover="li">
                            <a href="#" data-toggle="dropdown" class="toggle-button">
                              <i class="fa fa-pencil"></i>
                            </a>
                            <ul class="dropdown-menu" role="menu">
                              <li><a href="#">Edit</a></li>
                              <li><a href="#">Delete</a></li>
                            </ul>
                          </div>
                          <a href="" class="comment-author pull-left">Bill D.</a>
                          <span>What time did it finish?</span>
                          <div class="comment-date">14 min</div>
                        </div>
                      </li>
                      <li class="comment-form">
                        <div class="input-group">

                          <span class="input-group-btn">
                   <a href="" class="btn btn-default"><i class="fa fa-photo"></i></a>
                </span>

                          <input type="text" class="form-control" />

                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div class="col-xs-12 col-md-6 col-lg-4 item">
                <div class="timeline-block">
                  <div class="panel panel-default">
                    <div class="panel-heading">
                      <div class="media">
                        <div class="media-left">
                          <a href="">
                            <img src={commentPerson2} class="media-object" />
                          </a>
                        </div>
                        <div class="media-body">
                          <a href="#" class="pull-right text-muted"><i class="icon-reply-all-fill fa fa-2x "></i></a>

                          <a href="">Jonathan</a>

                          <span>on 15th January, 2014</span>
                        </div>
                      </div>
                    </div>

                    <img src={commentPerson3} class="img-responsive" />
                    <ul class="comments">
                      <li clas="media">
                        <div class="media-left">
                          <a href="">
                            <img src={commentPerson1} class="media-object" />
                          </a>
                        </div>
                        <div class="media-body">
                          <div class="pull-right dropdown" data-show-hover="li">
                            <a href="#" data-toggle="dropdown" class="toggle-button">
                              <i class="fa fa-pencil"></i>
                            </a>
                            <ul class="dropdown-menu" role="menu">
                              <li><a href="#">Edit</a></li>
                              <li><a href="#">Delete</a></li>
                            </ul>
                          </div>
                          <a href="" class="comment-author">Mary</a>
                          <span>Wow</span>
                          <div class="comment-date">2 days</div>
                        </div>
                      </li>
                      <li class="comment-form">
                        <div class="input-group">

                          <input type="text" class="form-control" />

                          <span class="input-group-btn">
                   <a href="" class="btn btn-default"><i class="fa fa-photo"></i></a>
                </span>

                        </div>
                      </li>
                    </ul>
                  </div>

                </div>
              </div>
        
        </div>
    </div>
  )
}

export default Landing