import React from 'react';
import ReactDOM from 'react-dom';
import Portal from 'react-minimalist-portal';
import $ from 'jquery';
export class Project extends React.Component{

  constructor(props){
    super(props);
    this.removeItem = this.removeItem.bind(this);
  }

  removeItem(e) {
    const {closePreview} = this.props;
    closePreview();
  }

  componentDidMount() {
    $('.project-modal').click(()=>{
      $('.project-modal').remove();
    });
  }

  // componentDidMount() {
  //
  //   //this closes modal window, stops click from going to parent and setting state again
  //   ReactDOM.findDOMNode(this).addEventListener('click', (event) => {
  //     event.stopPropagation();
  //     this.removeItem()
  //   }, false);
  //
  // }

  render(){

    const {projects, shortName} = this.props;
    const project = projects[shortName];

    return (
      <Portal>

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
      </Portal>
    )
  }
}
