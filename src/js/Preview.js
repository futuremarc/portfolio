import React from 'react';
import {Project} from './Project';

export class Preview extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      clickedPreview: null
    }
    this.onPreviewClick = this.onPreviewClick.bind(this);
  }


  onPreviewClick(e){
    const {shortName} = this.props;
    this.setState({clickedPreview: shortName});
  }

  render(){

    const {title, shortName, projects} = this.props;

    return (
      <div onClick={this.onPreviewClick} id={shortName} className="square bg col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 ">
          <div className="content">
              <div className="table">
                  <div className="table-cell center-text">
                      {title}
                  </div>
              </div>
          </div>
          { this.state.clickedPreview ? <Project projects={projects} shortName={shortName} /> : null }
      </div>
    )

  }

}
