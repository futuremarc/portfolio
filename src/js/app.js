import React from 'react';
import {Preview} from './Preview';

const Title = (props) => {

  const {first, last} = props;
  return <h1 className="title center-text">{first} {last}</h1>

}

const Subtitle = () => {
  return <h3 className="subtitle center-text" >Portfolio of Work</h3>
}



export class App extends React.Component{

  constructor(props){ //define states in constructor
    super(props);

    this.state = {
     projects:
      {
        twitch : {
          title: 'Twitch Plays Shakespeare',
          shortName:'twitch',
          description:'Twitch plays Shakespeare was an app developed for Google Research',
          tech:['Node.js', 'Websockets', 'Three.js', 'Javascript', 'HTML', 'CSS', 'Mocha', 'Gulp', 'Express.js', 'Webpack', 'Handlebars', 'Pug/Jade', 'SASS','Arduino', 'Circuitry'],
          role:['Front-end','Back-end','Full-stack','Fabrication','Design','Concept','Sensors','Founder','Product','Business'],
          url:'',
          media:[{type:'',url:''}],
          press:[{title:'',url:''}]
        },
        svrround : {
          title:'Svrround',
          shortName:'svrround',
          description:'',
          tech:['Node.js', 'Websockets', 'Three.js', 'Javascript', 'HTML', 'CSS', 'Mocha', 'Gulp', 'Express.js', 'Webpack', 'Handlebars', 'Pug/Jade', 'SASS','Arduino', 'Circuitry'],
          role:['Front-end','Back-end','Full-stack','Fabrication','Design','Concept','Sensors','Founder','Product','Business'],
          url:'',
          media:[{type:'',url:''}],
          press:[{title:'',url:''}]
        },
        bedroom : {
          title:'Bedroom Jammer',
          shortName:'bedroom',
          description:'',
          tech:['Node.js', 'Websockets', 'Three.js', 'Javascript', 'HTML', 'CSS', 'Mocha', 'Gulp', 'Express.js', 'Webpack', 'Handlebars', 'Pug/Jade', 'SASS','Arduino', 'Circuitry'],
          role:['Front-end','Back-end','Full-stack','Fabrication','Design','Concept','Sensors','Founder','Product','Business'],
          url:'',
          media:[{type:'',url:''}],
          press:[{title:'',url:''}]
        },
        canale : {
          title:'Canale Quattro',
          shortName:'canale',
          description:'',
          tech:['Node.js', 'Websockets', 'Three.js', 'Javascript', 'HTML', 'CSS', 'Mocha', 'Gulp', 'Express.js', 'Webpack', 'Handlebars', 'Pug/Jade', 'SASS','Arduino', 'Circuitry'],
          role:['Front-end','Back-end','Full-stack','Fabrication','Design','Concept','Sensors','Founder','Product','Business'],
          url:'',
          media:[{type:'',url:''}],
          press:[{title:'',url:''}]
        },
        glitch : {
          title:'Glitch the World',
          shortName:'glitch',
          description:'',
          tech:['Node.js', 'Websockets', 'Three.js', 'Javascript', 'HTML', 'CSS', 'Mocha', 'Gulp', 'Express.js', 'Webpack', 'Handlebars', 'Pug/Jade', 'SASS','Arduino', 'Circuitry'],
          role:['Front-end','Back-end','Full-stack','Fabrication','Design','Concept','Sensors','Founder','Product','Business'],
          url:'',
          media:[{type:'',url:''}],
          press:[{title:'',url:''}]
        },
        immigrater : {
          title:'Immigrater',
          shortName:'immigrater',
          description:'',
          tech:['Node.js', 'Websockets', 'Three.js', 'Javascript', 'HTML', 'CSS', 'Mocha', 'Gulp', 'Express.js', 'Webpack', 'Handlebars', 'Pug/Jade', 'SASS','Arduino', 'Circuitry'],
          role:['Front-end','Back-end','Full-stack','Fabrication','Design','Concept','Sensors','Founder','Product','Business'],
          url:'',
          media:[{type:'',url:''}],
          press:[{title:'',url:''}]
        },
        haptec : {
          title:'Haptec',
          shortName:'haptec',
          description:'',
          tech:['Node.js', 'Websockets', 'Three.js', 'Javascript', 'HTML', 'CSS', 'Mocha', 'Gulp', 'Express.js', 'Webpack', 'Handlebars', 'Pug/Jade', 'SASS','Arduino', 'Circuitry'],
          role:['Front-end','Back-end','Full-stack','Fabrication','Design','Concept','Sensors','Founder','Product','Business'],
          url:'',
          media:[{type:'',url:''}],
          press:[{title:'',url:''}]
        },
        passtime : {
          title:'Passtime',
          shortName:'passtime',
          description:'',
          tech:['Node.js', 'Websockets', 'Three.js', 'Javascript', 'HTML', 'CSS', 'Mocha', 'Gulp', 'Express.js', 'Webpack', 'Handlebars', 'Pug/Jade', 'SASS','Arduino', 'Circuitry'],
          role:['Front-end','Back-end','Full-stack','Fabrication','Design','Concept','Sensors','Founder','Product','Business'],
          url:'',
          media:[{type:'',url:''}],
          press:[{title:'',url:''}]
        }
      }
    }

  }


  render(){

    const {projects} = this.state;

    return (
      <div>
        <Title first="Marc" last="Abbey"/>
        <Subtitle/>
        <div className="row">

          {
            Object.keys(projects).map((item,index) => {
              return <Preview projects={projects} title={projects[item].title} shortName={projects[item].shortName} key={index}/>
            })
          }
        </div>
      </div>
    )
  }
}
