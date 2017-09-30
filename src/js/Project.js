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
    this.onLeftArrowClick = this.onLeftArrowClick.bind(this);
    this.onRightArrowClick = this.onRightArrowClick.bind(this);
  }

  onCloseClick(e) {
    e.preventDefault();
    const {closeProject} = this.props;
    closeProject();
  }

  onLeftArrowClick(){
    this.setState({
      carouselIndex: Math.abs(-- this.state.carouselIndex % this.state.media.length),
      carouselDirection: 'left'
     });
  }

  onRightArrowClick(){
    this.setState({
      carouselIndex: ++ this.state.carouselIndex % this.state.media.length,
      carouselDirection: 'right'
    });
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
              <div className="row project-content">
                <div className="details-col col-xs-12 col-md-6 col-lg-6 col-xl-6">
                  <h3>{project.title}</h3>
                  <p>{ ReactHtmlParser(project.description) }</p>
                  <br/>
                  <br/>
                  <h5>Tech</h5>

                  {
                    project.tech.map((item,index) => {
                      return <span key={index} className="tag tech">{item}</span>
                    })
                  }
                  <br/>
                  <br/>
                  <h5>Roles</h5>
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

                  <Carousel carouselIndex={this.state.carouselIndex} carouselDirection={this.state.carouselDirection} media={this.state.media}/>

                  <div className="left-arrow" onClick={this.onLeftArrowClick}></div>
                  <div className="right-arrow" onClick={this.onRightArrowClick}></div>
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
