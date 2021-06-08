import 'assets/styles/profile.css'
import React from 'react'

const Profile = () => {
  return (
    <div>
      <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" rel="stylesheet" />
      <section id="content" className="container">
        {/* <!-- Begin .page-heading --> */}
        <div className="page-heading">
          <div className="media clearfix">
            <div className="media-left pr30">
              <a href="#">
                <img className="media-object mw150" src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="..." />
              </a>
            </div>
            <div className="media-body va-m">
              <h2 className="media-heading">Michael Halls
              <small> - Profile</small>
              </h2>
              <p className="lead">Lorem ipsum dolor sit amet ctetur adicing elit, sed do eiusmod tempor incididunt</p>
              <div className="media-links">
                <ul className="list-inline list-unstyled">
                  <li>
                    <a href="#" title="facebook link">
                      <span className="fa fa-facebook-square fs35 text-primary"></span>
                    </a>
                  </li>
                  <li>
                    <a href="#" title="twitter link">
                      <span className="fa fa-twitter-square fs35 text-info"></span>
                    </a>
                  </li>
                  <li>
                    <a href="#" title="google plus link">
                      <span className="fa fa-google-plus-square fs35 text-danger"></span>
                    </a>
                  </li>
                  <li className="hidden">
                    <a href="#" title="behance link">
                      <span className="fa fa-behance-square fs35 text-primary"></span>
                    </a>
                  </li>
                  <li className="hidden">
                    <a href="#" title="pinterest link">
                      <span className="fa fa-pinterest-square fs35 text-danger-light"></span>
                    </a>
                  </li>
                  <li className="hidden">
                    <a href="#" title="linkedin link">
                      <span className="fa fa-linkedin-square fs35 text-info"></span>
                    </a>
                  </li>
                  <li className="hidden">
                    <a href="#" title="github link">
                      <span className="fa fa-github-square fs35 text-dark"></span>
                    </a>
                  </li>
                  <li className="">
                    <a href="#" title="phone link">
                      <span className="fa fa-phone-square fs35 text-system"></span>
                    </a>
                  </li>
                  <li>
                    <a href="#" title="email link">
                      <span className="fa fa-envelope-square fs35 text-muted"></span>
                    </a>
                  </li>
                  <li className="hidden">
                    <a href="#" title="external link">
                      <span className="fa fa-external-link-square fs35 text-muted"></span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-4">
            <div className="panel">
              <div className="panel-heading">
                <span className="panel-icon">
                  <i className="fa fa-star"></i>
                </span>
                <span className="panel-title"> User Popularity</span>
              </div>
              <div className="panel-body pn">
                <table className="table mbn tc-icon-1 tc-med-2 tc-bold-last">
                  <thead>
                    <tr className="hidden">
                      <th className="mw30">#</th>
                      <th>First Name</th>
                      <th>Revenue</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <span className="fa fa-desktop text-warning"></span>
                      </td>
                      <td>Television</td>
                      <td>
                        <i className="fa fa-caret-up text-info pr10"></i>$855,913</td>
                    </tr>
                    <tr>
                      <td>
                        <span className="fa fa-microphone text-primary"></span>
                      </td>
                      <td>Radio</td>
                      <td>
                        <i className="fa fa-caret-down text-danger pr10"></i>$349,712</td>
                    </tr>
                    <tr>
                      <td>
                        <span className="fa fa-newspaper-o text-info"></span>
                      </td>
                      <td>Newspaper</td>
                      <td>
                        <i className="fa fa-caret-up text-info pr10"></i>$1,259,742</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="panel">
              <div className="panel-heading">
                <span className="panel-icon">
                  <i className="fa fa-trophy"></i>
                </span>
                <span className="panel-title"> My Skills</span>
              </div>
              <div className="panel-body pb5">
                <span className="label label-warning mr5 mb10 ib lh15">Default</span>
                <span className="label label-primary mr5 mb10 ib lh15">Primary</span>
                <span className="label label-info mr5 mb10 ib lh15">Success</span>
                <span className="label label-success mr5 mb10 ib lh15">Info</span>
                <span className="label label-alert mr5 mb10 ib lh15">Warning</span>
                <span className="label label-system mr5 mb10 ib lh15">Danger</span>
                <span className="label label-info mr5 mb10 ib lh15">Success</span>
                <span className="label label-success mr5 mb10 ib lh15">Ui Design</span>
                <span className="label label-primary mr5 mb10 ib lh15">Primary</span>

              </div>
            </div>
            <div className="panel">
              <div className="panel-heading">
                <span className="panel-icon">
                  <i className="fa fa-pencil"></i>
                </span>
                <span className="panel-title">About Me</span>
              </div>
              <div className="panel-body pb5">

                <h6>Experience</h6>

                <h4>Facebook Internship</h4>
                <p className="text-muted"> University of Missouri, Columbia
                <br /> Student Health Center, June 2010 - 2012
              </p>

                <hr className="short br-lighter" />

                <h6>Education</h6>

                <h4>Bachelor of Science, PhD</h4>
                <p className="text-muted"> University of Missouri, Columbia
                <br /> Student Health Center, June 2010 through Aug 2011
              </p>

                <hr className="short br-lighter" />

                <h6>Accomplishments</h6>

                <h4>Successful Business</h4>
                <p className="text-muted pb10"> University of Missouri, Columbia
                <br /> Student Health Center, June 2010 through Aug 2011
              </p>

              </div>
            </div>
          </div>
          <div className="col-md-8">

            <div className="tab-block">
              <ul className="nav nav-tabs">
                <li className="active">
                  <a href="#tab1" data-toggle="tab">Activity</a>
                </li>
                <li>
                  <a href="#tab1" data-toggle="tab">Social</a>
                </li>
                <li>
                  <a href="#tab1" data-toggle="tab">Media</a>
                </li>
              </ul>
              <div className="tab-content p30" style={{ height: "730px" }}>
                <div id="tab1" className="tab-pane active">
                  <div className="media">
                    <a className="pull-left" href="#"> <img className="media-object mn thumbnail mw50" src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="..." /> </a>
                    <div className="media-body">
                      <h5 className="media-heading mb20">Simon Rivers Posted
                      <small> - 3 hours ago</small>
                      </h5>
                      <img src="https://bootdey.com/img/Content/avatar/avatar6.png" className="mw140 mr25 mb20" />
                      <img src="https://bootdey.com/img/Content/avatar/avatar8.png" className="mw140 mr25 mb20" />
                      <img src="https://bootdey.com/img/Content/avatar/avatar7.png" className="mw140 mb20" />
                      <div className="media-links">
                        <span className="text-light fs12 mr10">
                          <span className="fa fa-thumbs-o-up text-primary mr5"></span> Like </span>
                        <span className="text-light fs12 mr10">
                          <span className="fa fa-share text-primary mr5"></span> Share </span>
                        <span className="text-light fs12 mr10">
                          <span className="fa fa-floppy-o text-primary mr5"></span> Save </span>
                        <span className="text-light fs12 mr10">
                          <span className="fa fa-comment text-primary mr5"></span> Comment </span>
                      </div>
                    </div>
                  </div>
                  <div className="media mt25">
                    <a className="pull-left" href="#"> <img className="media-object mn thumbnail thumbnail-sm rounded mw40" src="https://bootdey.com/img/Content/avatar/avatar6.png" alt="..." /> </a>
                    <div className="media-body mb5">
                      <h5 className="media-heading mbn">Simon Rivers Posted
                      <small> - 3 hours ago</small>
                      </h5>
                      <p> Omg so freaking sweet dude.</p>
                      <div className="media pb10">
                        <a className="pull-left" href="#"> <img className="media-object mn thumbnail thumbnail-sm rounded mw40" src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="..." /> </a>
                        <div className="media-body mb5">
                          <h5 className="media-heading mbn">Jessica Wong
                          <small> - 3 hours ago</small>
                          </h5>
                          <p>Omgosh I'm in love</p>
                        </div>
                      </div>
                      <div className="media mtn">
                        <a className="pull-left" href="#"> <img className="media-object mn thumbnail thumbnail-sm rounded mw40" src="https://bootdey.com/img/Content/avatar/avatar2.png" alt="..." /> </a>
                        <div className="media-body mb5">
                          <h5 className="media-heading mbn">Jessica Wong
                          <small> - 3 hours ago</small>
                          </h5>
                          <p>Omgosh I'm in love</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="media mt25">
                    <a className="pull-left" href="#"> <img className="media-object thumbnail mw50" src="https://bootdey.com/img/Content/avatar/avatar2.png" alt="..." /> </a>
                    <div className="media-body">
                      <h5 className="media-heading mb20">Simon Rivers Posted
                      <small> - 3 hours ago</small>
                      </h5>
                      <img src="https://bootdey.com/img/Content/avatar/avatar2.png" className="mw140 mr25 mb20" />
                      <img src="https://bootdey.com/img/Content/avatar/avatar3.png" className="mw140 mr25 mb20" />
                      <img src="https://bootdey.com/img/Content/avatar/avatar4.png" className="mw140 mb20" />
                      <div className="media-links">
                        <span className="text-light fs12 mr10">
                          <span className="fa fa-thumbs-o-up text-primary mr5"></span> Like </span>
                        <span className="text-light fs12 mr10">
                          <span className="fa fa-share text-primary mr5"></span> Share </span>
                        <span className="text-light fs12 mr10">
                          <span className="fa fa-floppy-o text-primary mr5"></span> Save </span>
                        <span className="text-light fs12 mr10">
                          <span className="fa fa-comment text-primary mr5"></span> Comment </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="tab2" className="tab-pane"></div>
                <div id="tab3" className="tab-pane"></div>
                <div id="tab4" className="tab-pane"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Profile
