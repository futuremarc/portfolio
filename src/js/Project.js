import React from 'react';

export class Project extends React.Component{

  constructor(props){
    super(props);
  }

  render(){

    const {projects, shortName} = this.props;
    const project = projects[shortName];

    return (
      <div className="project-modal">
        <h3>{project.title}</h3>
        <p>{project.description}</p>

        {
          project.tech.map((item,index) => {
            return <span key={index} className="tag tech">{item}</span>
          })
        }

        {
          project.role.map((item,index) => {
            return <span key={index} className="tag role">{item}</span>
          })
        }

        <a href={project.url}>{project.url}</a>

      </div>
    )

  }

}
