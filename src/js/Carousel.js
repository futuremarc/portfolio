import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import React from 'react';

export class Carousel extends React.Component{

  constructor(props){
    super(props);
  }

  render(){

    const {carouselIndex, media} = this.props;
    const currentSlide = media[carouselIndex];

    return(
      <div>
        <ReactCSSTransitionGroup
          transitionName="carousel"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}>
          {
            currentSlide.type === 'image' ? <img src={currentSlide.url} key={currentSlide.url} className="project-img"></img>
            : <iframe src={currentSlide.url} key={currentSlide.url} frameBorder={0} className="project-yt"></iframe>
          }
        </ReactCSSTransitionGroup>
      </div>
    );
  }
}
