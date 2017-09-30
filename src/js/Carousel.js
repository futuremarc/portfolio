import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import React from 'react';
import $ from 'jquery';
import Slider from 'react-slick';

export class Carousel extends React.Component{

  constructor(props){
    super(props);
  }

  componentDidMount() {
    var firstItem = $('.project-item')[0]
    $(firstItem).show();

    $('.project-item').click(()=>{

    })
  }

  render(){

    const {carouselIndex, media, carouselDirection} = this.props;
    const currentSlide = media[carouselIndex];
    const transitionName = "carousel-" + carouselDirection;

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    return(

        <Slider {...settings}>
          <div><h3>1</h3></div>
          <div><h3>2</h3></div>
          <div><h3>3</h3></div>
          <div><h3>4</h3></div>
          <div><h3>5</h3></div>
          <div><h3>6</h3></div>
        </Slider>



    );
  }
}


// {
//   media.map((item,index) => {
//     if (item.type === 'image'){
//         return <img src={item.url} key={index} className="project-item" ></img>
//     }else if (item.type === 'youtube'){
//         return <iframe src={item.url} key={index} className="project-item" frameBorder={0}></iframe>
//     }
//   })
// }




// {
//   currentSlide.type === 'image' ? <img src={currentSlide.url} key={currentSlide.url}></img>
//   : <iframe src={currentSlide.url} key={currentSlide.url} frameBorder={0}></iframe>
// }
