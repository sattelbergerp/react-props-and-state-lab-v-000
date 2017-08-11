import React from 'react';

class Pet extends React.Component {
  constructor() {
    super();
  }

  adoptClicked = (event)=>{
    this.props.onAdoptPet(this.props.pet.id);
  }

  render() {
    return (
      <div className="card">
        <div className="content">
          <a className="header">Pet {this.props.pet.name} {this.props.pet.gender=='male'? '♂' : '♀'}</a>
          <div className="meta">
            <span className="date">Pet {this.props.pet.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.pet.age}</p>
            <p>Weight: {this.props.pet.weight}</p>
          </div>
        </div>
        <div className="extra content">
          {!this.props.isAdopted? (<button className="ui primary button" onClick={this.adoptClicked}>Adopt pet</button>):
          (<button className="ui disabled button">Already adopted</button>)}
        </div>
      </div>
    );
  }
}

export default Pet;
