import React from 'react';

const Title = (props) => {

  const {first, last} = props;
  return <h1 className="title center-text">{first} {last}</h1>

}

const Subtitle = () => {
  return <h3 className="subtitle center-text" >Portfolio of Work</h3>
}

export class Project extends React.Component{

  constructor(props){
    super(props);
    //this.state={};
    this.onProjectClick = this.onProjectClick.bind(this);

  }

  onProjectClick(e){
    console.log('click',this.props.shortName);
    //this.setState()
  }


  render(){

    const {name, shortName} = this.props;

    return (
      <div onClick={this.onProjectClick} ref={(elt) => {this.activeProject = elt}} className={"square bg col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 " + shortName}>
          <div className="content">
              <div className="table">
                  <div className="table-cell center-text">
                      {name}
                  </div>
              </div>
          </div>
      </div>
    )

  }

}


export class App extends React.Component{

  constructor(props){ //define states in constructor
    super(props);

    this.state = {
     projects:
      [
        {
          name: 'Twitch Plays Shakespeare',
          shortName:'twitch'
        },
        {
          name:'Svrround',
          shortName:'svrround'
        },
        {
          name:'Bedroom Jammer',
          shortName:'bedroom'
        },
        {
          name:'Canale Quattro',
          shortName:'canale'
        },
        {
          name:'Glitch the World',
          shortName:'glitch'
        },
        {
          name:'Immigrater',
          shortName:'immigrater'
        },
        {
          name:'Haptec',
          shortName:'haptec'
        },
        {
          name:'Passtime',
          shortName:'passtime'
        }
      ]
    }

  }


  render(){

    const {projects} = this.state; //deconstruct

    return (
      <div>
        <Title first="Marc" last="Abbey"/>
        <Subtitle/>
        <div className="row">

          {
            projects.map((item,index) =>{
              return <Project name={item.name} shortName={item.shortName} key={index}/>
            })
          }
        </div>
      </div>
    )
  }
}



//will be deprecated in v16
Title.propTypes = {
  first: React.PropTypes.string.isRequired,
  last: React.PropTypes.string.isRequired
}
