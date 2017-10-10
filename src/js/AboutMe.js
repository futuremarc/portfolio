import React from 'react';
import ReactDOM from 'react-dom';
import Portal from 'react-minimalist-portal';
import ReactHtmlParser from 'react-html-parser';
import $ from 'jquery';

export class AboutMe extends React.Component{

  constructor(props){
    super(props);
    this.onCloseClick = this.onCloseClick.bind(this);

  }

  onCloseClick(e) {
    e.preventDefault();
    const {closeAboutMe} = this.props;
    closeAboutMe();
  }

  componentDidMount() {

    $( '.modal-overlay' ).on( 'mousewheel', function ( e ) {
      let event = e.originalEvent, d = event.wheelDelta || -event.detail;
      this.scrollTop += ( d < 0 ? 1 : -1 ) * 30;
      e.preventDefault();
    });

  }


  render(){

    const {about} = this.props;

    return (

      <Portal>
          <div key="overlay" className="modal-overlay">
            <div className="modal fadeIn">

              <a href="#" onClick={this.onCloseClick} className="close-modal"><span>×</span></a>
              <div className="container-fluid about-content">
                <div className="row">
                  <h1 className="about-title">{about.title}</h1>
                  <div className="about-body col-xs-12">
                  <p>{ ReactHtmlParser(about.description) }</p>
                  </div>

                </div>
              </div>
            </div>

          </div>

      </Portal>
    )
  }
}
