import './App.css';

import React, { Component } from 'react';
import im from './compenents/dev.jpg'
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        fullName: 'John Doe',
        bio: 'A passionate React developer.',
        imgSrc: im,
        profession: 'Software Engineer',
      },
      show: false,
      elapsedTime: 0,
    };
  }

  toggleShow = () => {
    this.setState((prevState) => ({
      show: !prevState.show,
    }));
  };

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState((prevState) => ({
        elapsedTime: prevState.elapsedTime + 1,
      }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { person, show, elapsedTime } = this.state;

    return (
      <div>
        <h1>Person Profile</h1>
        <button onClick={this.toggleShow}>
          {show ? 'Hide Profile' : 'Show Profile'}
        </button>
        {show && (
          <div>
            <h2>{person.fullName}</h2>
            <p>{person.bio}</p>
            <img src={person.imgSrc} alt={person.fullName} />
            <p>Profession: {person.profession}</p>
          </div>
        )}
        <p>Time Elapsed: {elapsedTime} seconds since mount</p>
      </div>
    );
  }
}

export default App;
