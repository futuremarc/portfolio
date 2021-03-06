import React from 'react';
import {Preview} from './Preview';
import {AboutMe} from './AboutMe';
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
    about:{
      title:'✨🚀',
      description:
      'I\'m a full-stack developer, educator, entrepreneur and in general, a creator. I love connecting people live in new ways and building scalable realtime applications. <br/><br/>I am currently available for front-end development (webpack, react.js, es6), full-stack (front-end + node.js, mongoDB, express.js, pm2), decentralized app development (truffle, solidity, IPFS), as a creative technologist (arduino, raspberry pi) or teaching (web fundamentals).<br/><br/>I\'ve built many full-stack realtime applications (<a href="https://nofile.io/g/F25vxnvgvvYzh3FmuCVvv8SYSLz59AiNLLgmlR49IKvJc0H9ylNVsFouHaK7m5le/resume.pdf" target="_blank">résumé</a>), most recently being a livestreaming 360˚ video platform for my startup <a href="https://svrround.com" target="_blank">Svrround</a>. I am usually in the middle of developing interactive music web experiences or video-games for musicians under the name Magic is Real.<br/><br/>Some of my work has featured at SXSW, Times Square, Microsoft Hub, AOL Virtual Reality Summit, Creative Tech Week, NY IFP Media Center, IAC Media Center, NYC Media Lab Summit, NYU Production Lab, and more.<br/><br/>email me! <a href="mailto:marcabbey@gmail.com">marcabbey@gmail.com</a>'
    },
     projects:
     {
       lovelocks : {
         title:'Crypto LoveLocks',
         shortName:'lovelocks',
         shortDescription:'blockchain web app (DApp)',
         description:'Crypto LoveLocks takes the idea of the love lock and puts it on the blockchain so they can never be taken down again. Using a smart contract, 50,000 love locks are available to customize and engrave with a message to be kept on the Ethereum blockchain forever.',
         tech:['Solidity', 'Truffle', 'React.js', 'Webpack','Blockchain'],
         role:['Front-end','Back-end','Visual Design','Concept'],
         site:{url:'http://cryptolovelocks.co',isAlive:true},
         media:[{type:'image',url:'/../images/lovelocks-gif.gif'}],
         press:[{title:'',url:''}]
       },
        svrround : {
          title:'Svrround',
          shortName:'svrround',
          shortDescription:'360˚ video livestreaming platform',
          description:'An enterprise platform to easily create and share live 360˚ video streams. It combines rich interactivity on the viewers end with unique analytics on the streamers end to best utilize the 360˚ medium.<br/><br/>Svrround went through the <a href="http://nycmedialab.org/combine/" target="_blank">NYC Media Lab Combine Accelerator</a> and is funded by <a href="http://www.roughdraft.vc/" target="_blank">Rough Draft Ventures</a>, <a href="http://nycmedialab.org/" target="_blank"> NYC Media Lab</a>, and <a href="http://innovation.verizon.com/content/vic/en/innovation-labs.html/Verizon" target="_blank">Verizon Innovation Labs</a>.',
          tech:['Node.js', 'Websockets', 'Three.js', 'Javascript', 'Express.js', 'MongoDB','Handlebars','Gulp', 'Pug/Jade', 'SASS'],
          role:['Front-end','Back-end','Visual Design','Concept','Founder','Product','Business'],
          site:{url:'https://svrround.com',isAlive:true},
          media:[{type:'youtube',url:'https://youtube.com/embed/POa-hH04fXA'}],
          press:[{title:'',url:''}]

          //,{type:'image',url:'/../images/svrround-gif2.gif'},{type:'image',url:'/../images/svrround1.png'},{type:'image',url:'/../images/svrround2.jpg'}
        },

        passtime : {
          title:'Passtime',
          shortName:'passtime',
          shortDescription:'avatar chrome extension',
          description:'A chrome extension that puts avatars of friends at the bottom of web browsers so friends can watch videos, listen to songs, and read articles together more easily.<br/><br/> Passtime was built for my thesis at <a href="https://tisch.nyu.edu/itp" target="_blank">NYU ITP</a> with support from <a href="https://research.google.com/" target="_blank">Research at Google</a>.',
          tech:['Node.js', 'Websockets', 'Three.js', 'Javascript', 'HTML', 'CSS','Gulp', 'Express.js','Handlebars'],
          role:['Front-end','Back-end','Design','Concept','Product'],
          site:{url:'https://passti.me',isAlive:false},
          media:[{type:'youtube',url:'https://www.youtube.com/embed/dTa4V8IRT_E'},{type:'youtube',url:'https://www.youtube.com/embed/VtrBiOfD4wY'},{type:'image',url:'/../images/passtime1.jpg'}, {type:'image',url:'/../images/passtime2.png'}],
          press:[{title:'',url:''}]
        },
        immigrater : {
          title:'Immigrater',
          shortDescription:'interactive billboard web app',
          shortName:'immigrater',
          description:'An interactive billboard located at the Viacom building in Times Square that allowed anyone to swipe to accept or reject immigrants, tinder style. The project critiqued the banale nature of the US attitude towards immigration. <br/><br/> Immigrater was built for <a href="http://viacom.com" target="_blank">Viacom</a> and <a href="http://nycmedialab.org">NYC Media Lab</a>',
          tech:['Node.js', 'Websockets','Javascript', 'HTML', 'CSS','Express.js'],
          role:['Front-end','Back-end','Concept'],
          site:{url:'https://immigrater.us', isAlive:false},
          media:[{type:'youtube',url:'https://www.youtube.com/embed/apGaoW5eLO4'}],
          press:[{title:'',url:''}]
        },
        twitch : {
          title: 'Twitch Plays Shakespeare',
          shortName:'twitch',
          shortDescription:'interactive theatre web app',
          description:'Inspired by the popular Twitch Plays Pokemon, in this interactive take on Shakespeare’s Hamlet, an in-person audience votes continuously on Hamlet’s actions throughout the course of the play. </br></br> Twitch Plays Shakespeare was built with support from <a href="https://research.google.com/" target="_blank">Research at Google</a>',
          tech:['Node.js', 'Websockets', 'Javascript', 'HTML', 'CSS', 'Express.js'],
          role:['Front-end','Back-end'],
          site:{url:'twitchplays.com'},
          media:[{type:'image',url:'/../images/twitch2.jpg'},{type:'image',url:'/../images/twitch1.jpg'},{type:'image',url:'/../images/twitch3.jpg'},{type:'image',url:'/../images/twitch4.jpg'},{type:'image',url:'/../images/twitch5.jpg'},{type:'image',url:'/../images/twitch6.jpg'}],
          press:[{title:'',url:''}]
        },

        canale : {
          title:'Canale Quattro',
          shortName:'canale',
          shortDescription:'music broadcast webpage',
          description:'Live broadcast website for the premiere of the band Pheonix\'s single "J-Boy". Viewers watched together around the world with an immersive, functional, retro television.',
          tech:['WebGL', 'Javascript', 'HTML', 'CSS'],
          role:['Front-end','Back-end','Visual Design','Sound Design'],
          site:{url:'https://canalequattro.tv',isAlive:false},
          media:[{type:'youtube',url:'https://youtube.com/embed/q6EjzpLOwoo'}],
          press:[{title:'',url:''}]
        },

        magic : {
          title:'Magic is Real',
          shortName:'magic',
          shortDescription:'music performance and software',
          description:'A performance piece showcasing a 7 episode interactive music app that animates a story of a girl who finds many pieces. <br/><br/> This recording was performed at SXSW 2016.',
          tech:['Node.js', 'Websockets','Javascript', 'Touchdesigner','Python','HTML', 'CSS'],
          role:['Front-end','Back-end','Design','Concept','Story','Music','Sound Design','Performance'],
          site:{},
          media:[{type:'youtube',url:'https://www.youtube.com/embed/8ki_Bk6EPcw'}],
          press:[{title:'',url:''}]
        },


        glitch : {
          title:'Glitch the World',
          shortName:'glitch',
          shortDescription:'interactive cinema web app',
          description:'An in-person interactive storytelling experience about a young girl trying to break out of a digital world, losing her sense of reality along the way. <br/><br/> The audience joined a mobile web app that was timed with the main story to chat with the characters in the story, get additional sounds, animation, and story, play games to help push the narrative forward, and explore a world map during intermission.<br/><br/> Glitch the World was built with support from <a href="https://research.google.com/" target="_blank">Research at Google</a>.',
          tech:['Touchdesigner','Websockets','Python', 'Node.js', 'Javascript', 'HTML', 'CSS'],
          role:['Front-end','Back-end','Design','Story', 'Concept'],
          site:{},
          media:[{type:'youtube',url:'https://youtube.com/embed/7HcznestTHI'}],
          press:[{title:'',url:''}]
        },

        bedroom : {
          title:'Bedroom Jammer',
          shortName:'bedroom',
          shortDescription:'interactive music videogame',
          description:'An interactive music web app where each user that connects gets 1 of 4 unique characters to interact with the environment to create music together.',
          tech:['Node.js', 'Websockets', 'Phaser.js', 'Javascript', 'HTML', 'CSS', 'Express.js'],
          role:['Front-end','Back-end','Visual Design','Concept','Sound Design'],
          site:{url:'http://bedroomjammer.com',isAlive:false},
          media:[{type:'image',url:'/../images/bedroom-jammer2.jpg'},{type:'image',url:'/../images/bedroom-jammer1.jpg'},{type:'image',url:'/../images/bedroom-jammer-gif.gif'}],
          press:[{title:'',url:''}]
        },

        emoji : {
          title:'Emoji Dance',
          shortName:'emoji',
          shortDescription:'interactive music webpage',
          description:'A website to discover and save your favorite Japanese Emoji all while watch. The Emoji join the party and dance along to the song.',
          tech:[ 'Javascript', 'HTML', 'CSS'],
          role:['Front-end','Design','Concept'],
          site:{url:'http://emoji.magicisreal.net',alive:false},
          media:[{type:'image',url:'/../images/emoji-gif.gif'}],
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
          media:[{type:'youtube',url:'https://www.youtube.com/embed/JDO-xQSmC8A'}],
          press:[{title:'',url:''}]
        },

        haptec : {
          title:'Haptec',
          shortName:'haptec',
          shortDescription:'bike navigation hardware',
          description:'An integrated system for bicycle navigation which allows a cyclist to intuitively feel their orientation to magnetic North, or a destination-beacon,  with vibration motors in the handles and an LED module to optimize bike journey safety, efficiency and freedom.',
          tech:['Node.js', 'Websockets', 'Javascript', 'HTML', 'CSS', 'Express.js','Arduino', 'Circuitry','Cordova'],
          role:['Front-end','Back-end','App Development','Fabrication','Design','Concept','Sensors','Product','Business'],
          site: {url:'https://haptec.io',isAlive:false},
          media:[{type:'youtube',url:'https://www.youtube.com/embed/MspImczjQ5Q'}],
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

    this.onAboutMeClick = this.onAboutMeClick.bind(this);
    this.closeAboutMe = this.closeAboutMe.bind(this);

  }

  onAboutMeClick(){
    const {shortName} = this.props;
    this.setState({isAboutMeActive: true});
  }

  closeAboutMe(e){
    this.setState({isAboutMeActive: null});
  }

  render(){

    const {projects, about} = this.state;

    return (
      <div>
        <div className="row">
          {
            Object.keys(projects).map((item,index) => {
              return <Preview projects={projects} title={projects[item].title}  shortDescription={projects[item].shortDescription} shortName={projects[item].shortName} key={index}/>
            })
          }
        </div>
        <div onClick={this.onAboutMeClick} id="about-me-btn"><span>?</span></div>
        { this.state.isAboutMeActive ? <AboutMe about={about} closeAboutMe={this.closeAboutMe} /> : null }
      </div>
    )
  }
}
