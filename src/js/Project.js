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
      carouselIndex : 0,
      media: project.media,
      carouselDirection: 'left'
    };
    this.onCloseClick = this.onCloseClick.bind(this);

  }

  onCloseClick(e) {
    e.preventDefault();
    const {closeProject} = this.props;
    closeProject();
  }

  componentDidMount() {
    document.body.style.overflow = "hidden";
    $('.project-modal').click(()=>{
      this.removeItem()
    });
  }

  componentWillUnmount() {
    document.body.style.overflow = "scroll";
  }


  render(){

    const {project, shortName} = this.props;

    return (

      <Portal>
          <div key="overlay" className="modal-overlay">
            <div className="modal fadeIn">

              <a href="#" onClick={this.onCloseClick} className="close-modal">&times;</a>
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

                    <Carousel className="carousel" carouselIndex={this.state.carouselIndex} carouselDirection={this.state.carouselDirection} media={this.state.media}/>

                  </div>
                </div>
              </div>
            </div>

          </div>

      </Portal>
    )
  }
}

// {
//   project.media[0].type === 'image' ? <img src={project.media[0].url} key={project.media[0].url} className="project-img"></img>
//   : <iframe src={project.media[0].url} key={project.media[0].url} frameBorder={0} className="project-yt"></iframe>
// }

// {
//   project.media.map((item,index) => {
//     if (item.type === 'image'){
//         return <img src={item.url} key={index} className="project-img"></img>
//     }else if (item.type === 'youtube'){
//         return <iframe src={item.url} key={index} frameBorder={0} className="project-yt"></iframe>
//     }
//   })
// }
