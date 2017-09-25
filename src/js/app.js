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
     projects:
      [
        {
          name: 'Twitch Plays Shakespeare',
          key:'twitch'
        },
        {
          name:'Svrround',
          key:'svrround'
        },
        {
          name:'Bedroom Jammer',
          key:'bedroom'
        },
        {
          name:'Canale Quattro',
          key:'canale'
        },
        {
          name:'Glitch the World',
          key:'glitch'
        },
        {
          name:'Immigrater',
          key:'immigrater'
        },
        {
          name:'Haptec',
          key:'haptec'
        },
        {
          name:'Passtime',
          key:'passtime'
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
            projects.map(item => {
              return (
                <div key={item.key} className={"square bg col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 " + item.key}>
                    <div className="content">
                        <div className="table">
                            <div className="table-cell center-text">
                                {item.name}
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
