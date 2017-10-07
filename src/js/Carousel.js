import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import React from 'react';
import $ from 'jquery';
import Slider from 'react-slick';

export class Carousel extends React.Component{

  constructor(props){
    super(props);
  }

  render(){

    const {media} = this.props;

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    return(
      <div className="carousel">
        <Slider {...settings}>

        {
          media.map((item,index) => {
            if (item.type === 'image'){
                return <div key={index} ><img src={item.url} className="project-img" ></img></div>
            }else if (item.type === 'youtube'){
                return <div key={index}> <iframe src={item.url} className="project-yt" frameBorder={0}></iframe></div>
            }
          })
        }

        </Slider>
      </div>

    );
  }
}
