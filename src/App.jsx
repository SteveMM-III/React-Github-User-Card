import React from 'react';
import axios from 'axios';
import uuid from 'uuid';

import Card from './Card';

import './App.css';

class App extends React.Component {
  state = {
    user: {},
    followers: []
  }

  componentDidMount = () => {
    axios
      .get( 'https://api.github.com/users/SteveMM-III' )
      .then( res => this.setState( { user: res.data } ) )
      .catch( err => console.log( `Error: ${ err }` ) );
      
    axios
      .get( 'https://api.github.com/users/SteveMM-III/followers' )
      .then( res => 
        res.data.forEach( e => axios
          .get( e.url )
          .then( res => this.setState( { followers: [ ...this.state.followers, res.data ] } ) )
          .catch( err => console.log( `Error: ${ err }` ) ) )
      )
      .catch( err => console.log( `Error: ${ err }` ) );
  };

  render() {
    return (
      <div className="App">
        <Card user={ this.state.user } />
        {
          this.state.followers.map( user => (
            <Card key={ uuid.v4() } user={ user } />
          ) )
        }
      </div>
    );
  }
}

export default App;
