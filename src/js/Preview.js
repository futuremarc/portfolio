import React from 'react';
import {Project} from './Project';

export class Preview extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      isActive: null
    }
    this.onPreviewClick = this.onPreviewClick.bind(this);
    this.closeProject = this.closeProject.bind(this);
  }


  onPreviewClick(){
    const {shortName} = this.props;
    this.setState({isActive: true});
  }

  closeProject(e){
    this.setState({isActive: null});
  }

  render(){

    const {title, shortName, projects, shortDescription, isActive} = this.props;
    const project = projects[shortName];

    return (
      <div onClick={this.onPreviewClick} id={shortName} className="square bg col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 ">
          <div className="preview-content">
              <div className="preview-title">{title}</div>
              <div className="preview-description">{shortDescription}</div>
          </div>
          { this.state.isActive ? <Project project={project} closeProject={this.closeProject} shortName={shortName} /> : null }
      </div>
    )
  }
}
