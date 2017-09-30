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

    const {title, shortName, projects, isActive} = this.props;
    const project = projects[shortName];

    return (
      <div onClick={this.onPreviewClick} id={shortName} className="square bg col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 ">
          <div className="content">
              <div className="table">
                  <div className="table-cell center-text">
                      {title}
                  </div>
              </div>
          </div>
          { this.state.isActive ? <Project project={project} closeProject={this.closeProject} shortName={shortName} /> : null }
      </div>
    )
  }
}
