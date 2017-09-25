import React from 'react';

const Title = (props) => {

  const {first, last} = props;
  return <h1 className="title">{first} {last}</h1>

}

const Subtitle = () => {
  return <h3>Portfolio of Work</h3>
}


export class App extends React.Component{

  constructor(props){ //define states in constructor
    super(props);
    this.state = {
     projects:  ['Twitch Plays Shakespeare', 'Svrround', 'Glitch the World', 'Immigrater', 'Bedroom Jammer', 'Haptec', 'Passtime']
    }
  }
  render(){

    const {projects} = this.state; //deconstruct

    return (
      <div>
        <Title first="Marc" last="Abbey"/>
        <Subtitle/>
        {
          projects.map(item => {
            return <p key={item}>{item}</p>
          })
        }
      </div>
    )
  }
}



Title.propTypes = {
  first: React.PropTypes.string.isRequired,
  last: React.PropTypes.string.isRequired
}
