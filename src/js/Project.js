import React from 'react';
import ReactDOM from 'react-dom';
import Portal from 'react-minimalist-portal';
import $ from 'jquery';
export class Project extends React.Component{

  constructor(props){
    super(props);
    this.onCloseClick = this.onCloseClick.bind(this);
  }

  onCloseClick(e) {
    e.preventDefault();
    const {closeProject} = this.props;
    closeProject();
  }

  componentDidMount() {
    $('.project-modal').click(()=>{
      this.removeItem()
    });
  }


  render(){

    const {projects, shortName} = this.props;
    const project = projects[shortName];

    return (
      <Portal>

        <div className="modal-overlay">
          <div className="modal">
            <a href="#" onClick={this.onCloseClick} className="close-modal">&times;</a>
            <h3>{project.title}</h3>
            <p>{project.description}</p>

            {
              project.tech.map((item,index) => {
                return <span key={index} className="tag tech">{item}</span>
              })
            }
            <br/>
            <br/>
            {
              project.role.map((item,index) => {
                return <span key={index} className="tag role">{item}</span>
              })
            }

            <a href={project.url}>{project.url}</a>
          </div>
        </div>
      </Portal>
    )
  }
}
