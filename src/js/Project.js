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

    $( '.modal, iframe' ).on( 'mousewheel', function ( e ) {
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

              <a href="#" onClick={this.onCloseClick} className="close-modal"><span>×</span></a>
              <div className="container-fluid">

                <div className="row project-content">
                  <h1 className="project-title">{project.title}</h1>
                  <div className="details-col col-xs-12 col-md-6 col-lg-6 col-xl-6">

                    <br/>
                    <p>{ ReactHtmlParser(project.description) }</p>
                    <h3>Tech</h3>
                    <br/>
                    {
                      project.tech.map((item,index) => {
                        return <span key={index} className="tag tech">{item}</span>
                      })
                    }

                    <br/>
                    <h3>Roles</h3>
                    <br/>
                    {
                      project.role.map((item,index) => {
                        return <span key={index} className="tag role">{item}</span>
                      })
                    }
                    <br/>
                    { project.site.url ? <h3>Project Link</h3> : null}
                    <br/>
                    { project.site.isAlive ? <a className="link" href={project.site.url} target="_blank">{project.site.url}</a> : <div className ="dead-link link">{project.site.url}</div>  }
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
