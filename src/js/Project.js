import React from 'react';
import ReactDOM from 'react-dom';
import Portal from 'react-minimalist-portal';
import ReactHtmlParser from 'react-html-parser';
import {Carousel} from './Carousel.js'
import $ from 'jquery';

export class Project extends React.Component{

  constructor(props){
    super(props);

    const {project} = this.props;

    this.state = {
      media: project.media
    };
    this.onCloseClick = this.onCloseClick.bind(this);

  }

  onCloseClick(e) {
    e.preventDefault();
    const {closeProject} = this.props;
    closeProject();
  }

  componentDidMount() {

    $( '.modal' ).on( 'mousewheel', function ( e ) {
      let event = e.originalEvent, d = event.wheelDelta || -event.detail;
      this.scrollTop += ( d < 0 ? 1 : -1 ) * 30;
      e.preventDefault();
    });
  }


  render(){

    const {project, shortName} = this.props;

    return (

      <Portal>
          <div key="overlay" className="modal-overlay">
            <div className="modal fadeIn">

              <a href="#" onClick={this.onCloseClick} className="close-modal"><span className="glyphicon glyphicon-remove"></span></a>
              <div className="container-fluid">
                <div className="row project-content">
                  <div className="details-col col-xs-12 col-md-6 col-lg-6 col-xl-6">
                    <h2 className="project-title">{project.title}</h2>
                    <p>{ ReactHtmlParser(project.description) }</p>
                    <br/>
                    <br/>
                    <h3>Tech</h3>

                    {
                      project.tech.map((item,index) => {
                        return <span key={index} className="tag tech">{item}</span>
                      })
                    }
                    <br/>
                    <br/>
                    <h3>Roles</h3>
                    {
                      project.role.map((item,index) => {
                        return <span key={index} className="tag role">{item}</span>
                      })
                    }
                    <div>
                    </div>

                    <a href={project.url}>{project.url}</a>
                  </div>

                  <div className="media-col col-xs-12 col-md-6 col-lg-6 col-xl-6">

                    <Carousel className="carousel" media={this.state.media}/>

                  </div>
                </div>
              </div>
            </div>

          </div>

      </Portal>
    )
  }
}
