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
    this.openProject = this.openProject.bind(this);

  }

  openProject(shortName){
    console.log('openProject',shortName);
  }

  onProjectClick(e){
    const {shortName} = this.props;
    this.openProject(shortName);
  }

  render(){

    const {title, shortName} = this.props;

    return (
      <div onClick={this.onProjectClick} className={"square bg col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 " + shortName}>
          <div className="content">
              <div className="table">
                  <div className="table-cell center-text">
                      {title}
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
          title: 'Twitch Plays Shakespeare',
          shortName:'twitch',
          description:'',
          tech:['Node.js', 'Websockets', 'Three.js', 'Javascript', 'HTML', 'CSS', 'Mocha', 'Gulp', 'Express.js', 'Webpack', 'Handlebars', 'Pug/Jade', 'SASS','Arduino', 'Circuitry'],
          role:['Front-end','Back-end','Full-stack','Fabrication','Design','Concept','Sensors','Founder','Product','Business'],
          url:'',
          media:[{type:'',url:''}],
          press:[{title:'',url:''}]
        },
        {
          title:'Svrround',
          shortName:'svrround',
          description:'',
          tech:['Node.js', 'Websockets', 'Three.js', 'Javascript', 'HTML', 'CSS', 'Mocha', 'Gulp', 'Express.js', 'Webpack', 'Handlebars', 'Pug/Jade', 'SASS','Arduino', 'Circuitry'],
          role:['Front-end','Back-end','Full-stack','Fabrication','Design','Concept','Sensors','Founder','Product','Business'],
          url:'',
          media:[{type:'',url:''}],
          press:[{title:'',url:''}]
        },
        {
          title:'Bedroom Jammer',
          shortName:'bedroom',
          description:'',
          tech:['Node.js', 'Websockets', 'Three.js', 'Javascript', 'HTML', 'CSS', 'Mocha', 'Gulp', 'Express.js', 'Webpack', 'Handlebars', 'Pug/Jade', 'SASS','Arduino', 'Circuitry'],
          role:['Front-end','Back-end','Full-stack','Fabrication','Design','Concept','Sensors','Founder','Product','Business'],
          url:'',
          media:[{type:'',url:''}],
          press:[{title:'',url:''}]
        },
        {
          title:'Canale Quattro',
          shortName:'canale',
          description:'',
          tech:['Node.js', 'Websockets', 'Three.js', 'Javascript', 'HTML', 'CSS', 'Mocha', 'Gulp', 'Express.js', 'Webpack', 'Handlebars', 'Pug/Jade', 'SASS','Arduino', 'Circuitry'],
          role:['Front-end','Back-end','Full-stack','Fabrication','Design','Concept','Sensors','Founder','Product','Business'],
          url:'',
          media:[{type:'',url:''}],
          press:[{title:'',url:''}]
        },
        {
          title:'Glitch the World',
          shortName:'glitch',
          description:'',
          tech:['Node.js', 'Websockets', 'Three.js', 'Javascript', 'HTML', 'CSS', 'Mocha', 'Gulp', 'Express.js', 'Webpack', 'Handlebars', 'Pug/Jade', 'SASS','Arduino', 'Circuitry'],
          role:['Front-end','Back-end','Full-stack','Fabrication','Design','Concept','Sensors','Founder','Product','Business'],
          url:'',
          media:[{type:'',url:''}],
          press:[{title:'',url:''}]
        },
        {
          title:'Immigrater',
          shortName:'immigrater',
          description:'',
          tech:['Node.js', 'Websockets', 'Three.js', 'Javascript', 'HTML', 'CSS', 'Mocha', 'Gulp', 'Express.js', 'Webpack', 'Handlebars', 'Pug/Jade', 'SASS','Arduino', 'Circuitry'],
          role:['Front-end','Back-end','Full-stack','Fabrication','Design','Concept','Sensors','Founder','Product','Business'],
          url:'',
          media:[{type:'',url:''}],
          press:[{title:'',url:''}]
        },
        {
          title:'Haptec',
          shortName:'haptec',
          description:'',
          tech:['Node.js', 'Websockets', 'Three.js', 'Javascript', 'HTML', 'CSS', 'Mocha', 'Gulp', 'Express.js', 'Webpack', 'Handlebars', 'Pug/Jade', 'SASS','Arduino', 'Circuitry'],
          role:['Front-end','Back-end','Full-stack','Fabrication','Design','Concept','Sensors','Founder','Product','Business'],
          url:'',
          media:[{type:'',url:''}],
          press:[{title:'',url:''}]
        },
        {
          title:'Passtime',
          shortName:'passtime',
          description:'',
          tech:['Node.js', 'Websockets', 'Three.js', 'Javascript', 'HTML', 'CSS', 'Mocha', 'Gulp', 'Express.js', 'Webpack', 'Handlebars', 'Pug/Jade', 'SASS','Arduino', 'Circuitry'],
          role:['Front-end','Back-end','Full-stack','Fabrication','Design','Concept','Sensors','Founder','Product','Business'],
          url:'',
          media:[{type:'',url:''}],
          press:[{title:'',url:''}]
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
              return <Project title={item.title} shortName={item.shortName} key={index}/>
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
