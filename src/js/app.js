import React from 'react';

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
     projects:  ['Twitch Plays Shakespeare', 'Svrround', 'Glitch the World', 'Immigrater', 'Bedroom Jammer', 'Haptec', 'Passtime']
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
            projects.map(item => {
              return (
                <div key={item} className="square bg col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xl-4">
                    <div className="content">
                        <div className="table">
                            <div className="table-cell center-text">
                                {item}
                            </div>
                        </div>
                    </div>
                </div>
              )
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
