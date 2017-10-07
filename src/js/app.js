import React from 'react';
import {Preview} from './Preview';
import $ from 'jquery';

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
        svrround : {
          title:'Svrround',
          shortName:'svrround',
          shortDescription:'360˚ video livestreaming platform',
          description:'An enterprise platform to easily create and share live 360˚ video streams. It combines rich interactivity on the viewers end with unique analytics on the streamers end to best utilize the 360˚ medium.',
          tech:['Node.js', 'Websockets', 'Three.js', 'Javascript', 'Express.js', 'MongoDB','Handlebars','Gulp', 'Pug/Jade', 'SASS'],
          role:['Front-end','Back-end','Visual Design','Concept','Founder','Product','Business'],
          site:{url:'https://svrround.com',alive:true},
          media:[{type:'youtube',url:'https://youtube.com/embed/POa-hH04fXA'},{type:'image',url:'/../images/svrround-gif2.gif'},{type:'image',url:'/../images/svrround1.png'},{type:'image',url:'/../images/svrround2.jpg'}],
          press:[{title:'',url:''}]
        },
        immigrater : {
          title:'Immigrater',
          shortDescription:'interactive billboard web app',
          shortName:'immigrater',
          description:'An interactive billboard located in Times Square that allowed anyone to swipe to accept or reject immigrants -- tinder style. The project critiqued the banale nature of the US attitude towards immigration.',
          tech:['Node.js', 'Websockets','Javascript', 'HTML', 'CSS','Express.js'],
          role:['Front-end','Back-end','Concept'],
          site:{url:'https://immigrater.us', alive:false},
          media:[{type:'youtube',url:'https://www.youtube.com/embed/apGaoW5eLO4'}],
          press:[{title:'',url:''}]
        },

        passtime : {
          title:'Passtime',
          shortName:'passtime',
          shortDescription:'avatar chrome extension',
          description:'A chrome extension that puts avatars of friends at the bottom of a browser so friends can watch videos, listen to songs, and read articles together more easily',
          tech:['Node.js', 'Websockets', 'Three.js', 'Javascript', 'HTML', 'CSS','Gulp', 'Express.js','Handlebars'],
          role:['Front-end','Back-end','Design','Concept','Product'],
          site:{url:'https://passti.me',alive:false},
          media:[{type:'image',url:'/../images/passtime1.jpg'}, {type:'image',url:'/../images/passtime2.png'},{type:'image',url:'/../images/passtime-gif.gif'}],
          press:[{title:'',url:''}]
        },
        twitch : {
          title: 'Twitch Plays Shakespeare',
          shortName:'twitch',
          shortDescription:'interactive theatre web app',
          description:'Inspired by the popular Twitch Plays Pokemon, in this interactive take on Shakespeare’s Hamlet, an in-person audience votes continuously on Hamlet’s actions throughout the course of the play. <br/> <br/> We built a voting system where the audience is prompted to vote via a mobile phone that gives pairs of choices timed throughout the performance. The voting prompts are brief and simple in order to keep the audience focused more on the performance than on their phones. A moderator controls the timing of new prompts. A big screen displays the winning choice and the next pair of choices to select from. And two small screens displaying the winning choice are placed on both sides of the stage to direct the actors.',
          tech:['Node.js', 'Websockets', 'Javascript', 'HTML', 'CSS', 'Express.js'],
          role:['Front-end','Back-end'],
          site:{},
          media:[{type:'image',url:'/../images/twitch2.jpg'},{type:'image',url:'/../images/twitch1.jpg'},{type:'image',url:'/../images/twitch3.jpg'},{type:'image',url:'/../images/twitch4.jpg'},{type:'image',url:'/../images/twitch5.jpg'},{type:'image',url:'/../images/twitch6.jpg'}],
          press:[{title:'',url:''}]
        },
        dimensions : {
          title:'Dimensions',
          shortName:'dimensions',
          shortDescription:'interactive fog installation',
          description:'An installation where fog is projection mapped to recreate the look and feel of our galaxy. Users can join a mobile web app and leave their own colored stars presented with fiber optic cables and can even control the speed and direction of the fog of stars.',
          tech:['Node.js', 'Websockets', 'Javascript', 'HTML', 'CSS','Arduino','Three.js'],
          role:['Front-end','Fabrication','Sound Design','Design'],
          site:{},
          media:[{type:'youtube',url:'https://www.youtube.com/embed/JDO-xQSmC8A'}, {type:'image',url:'/../images/dimenions4.png'},{type:'image',url:'/../images/dimenions3.png'},{type:'image',url:'/../images/dimenions2.png'}],
          press:[{title:'',url:''}]
        },

        canale : {
          title:'Canale Quattro',
          shortName:'canale',
          shortDescription:'music broadcast webpage',
          description:'Live broadcast website for the band Pheonix\'s single "J-Boy". Viewers watched together around the world with an immersive, functional, retro televsion.',
          tech:['WebGL', 'Javascript', 'HTML', 'CSS'],
          role:['Front-end','Back-end','Visual Design','Sound Design'],
          site:{url:'https://canalequattro.tv',alive:true},
          media:[{type:'youtube',url:'https://youtube.com/embed/q6EjzpLOwoo'}],
          press:[{title:'',url:''}]
        },

        haptec : {
          title:'Haptec',
          shortName:'haptec',
          shortDescription:'bike navigation hardware',
          description:'An integrated system for bicycle navigation which allows a cyclist to intuitively feel their orientation to magnetic North, or a destination-beacon,  with vibration motors in the handles and an LED module to optimize bike journey safety, efficiency and freedom.',
          tech:['Node.js', 'Websockets', 'Javascript', 'HTML', 'CSS', 'Express.js','Arduino', 'Circuitry','Cordova'],
          role:['Front-end','Back-end','App Development','Fabrication','Design','Concept','Sensors','Product','Business'],
          site: {url:'https://haptec.io',alive:false},
          media:[{type:'youtube',url:'https://www.youtube.com/embed/MspImczjQ5Q'}],
          press:[{title:'',url:''}]
        },

        bedroom : {
          title:'Bedroom Jammer',
          shortName:'bedroom',
          shortDescription:'interactive music videogame',
          description:'An interactive music web app where each user that connects gets 1 of 4 unique characters to interact with the environment to create music together.',
          tech:['Node.js', 'Websockets', 'Phaser.js', 'Javascript', 'HTML', 'CSS', 'Express.js'],
          role:['Front-end','Back-end','Visual Design','Concept','Sound Design'],
          site:{url:'http://bedroomjammer.com',alive:false},
          media:[{type:'image',url:'/../images/bedroom-jammer1.jpg'},{type:'image',url:'/../images/bedroom-jammer2.jpg'},{type:'image',url:'/../images/bedroom-jammer-gif.gif'}],
          press:[{title:'',url:''}]
        },

        glitch : {
          title:'Glitch the World',
          shortName:'glitch',
          shortDescription:'interactive cinema web app',
          description:'An in-person interactive storytelling experience about a young girl trying to break out of a digital world, losing her sense of reality along the way. <br/><br/> The audience joined a mobile web app that was timed with the main story to chat with the characters in the story, get additional sounds, animation, and story, play games to help push the narrative forward, and explore a world map during intermission.',
          tech:['Touchdesigner','Websockets','Python', 'Node.js', 'Javascript', 'HTML', 'CSS'],
          role:['Front-end','Back-end','Design','Story', 'Concept'],
          site:{},
          media:[{type:'youtube',url:'https://youtube.com/embed/7HcznestTHI'}],
          press:[{title:'',url:''}]
        },

        magic : {
          title:'Magic is Real',
          shortName:'magic',
          shortDescription:'music performance and software',
          description:'A performance piece showcasing a 7 episode interactive music piece that animates a story of a girl who finds many pieces',
          tech:['Node.js', 'Websockets','Javascript', 'Touchdesigner','Python','HTML', 'CSS'],
          role:['Front-end','Back-end','Design','Concept','Story','Music','Sound Design','Performance'],
          site:{},
          media:[{type:'youtube',url:'https://www.youtube.com/embed/8ki_Bk6EPcw'}],
          press:[{title:'',url:''}]
        },
        glove : {
          title:'Glove Phone',
          shortName:'glove',
          shortDescription:'connected glove',
          description:'This gestural phone was built right into a glove that could be worn. Speed dial your favorites by tapping your thumb to your index, middle or ring finger. To end a call tap your thumb to the top of your pinky. You also get haptic notification when you receive a call. To answer just tap your thumb to your pinky.',
          tech:['Arduino', 'Circuitry','Fona Board'],
          role:['Code','Fabrication','Design','Concept','Sensors'],
          site:{},
          media:[{type:'youtube',url:'https://www.youtube.com/embed/Fj5yJmoLfZg'},{type:'image',url:'/../images/glove-phone1.jpg'},{type:'image',url:'/../images/glove-phone2.jpg'},{type:'image',url:'/../images/glove-phone3.jpg'}],
          press:[{title:'',url:''}]
        },
        emoji : {
          title:'Emoji Dance',
          shortName:'emoji',
          shortDescription:'interactive music webpage',
          description:'A website to discover and save your favorite Japanese Emoji all while watch. The Emoji join the party and dance along to the song.',
          tech:[ 'Javascript', 'HTML', 'CSS'],
          role:['Front-end','Design','Concept'],
          site:{},
          media:[{type:'image',url:'/../images/emoji-gif.gif'}],
          press:[{title:'',url:''}]
        }
        // ,
        // space : {
        //   title:'Space Girl',
        //   shortName:'space',
        //   description:'An interactive music piece and video game about a girl getting ready for school by flying through space.',
        //   tech:[ 'Javascript', 'HTML', 'CSS'],
        //   role:['Front-end','Design','Concept'],
        //   site:{},
        //   media:[{type:'',url:''}],
        //   press:[{title:'',url:''}]
        // }
      }
    }

  }


  render(){

    const {projects} = this.state;

    return (
      <div>
        <div className="row">
          {
            Object.keys(projects).map((item,index) => {
              return <Preview projects={projects} title={projects[item].title}  shortDescription={projects[item].shortDescription} shortName={projects[item].shortName} key={index}/>
            })
          }
        </div>
      </div>
    )
  }
}
