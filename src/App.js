import React, { Component } from 'react';
import UserOutput from "./components/UserOutput";
import UserInput from './components/UserInput';
import { Button, Divider } from 'semantic-ui-react';

import './App.css';

class App extends Component {
  state = {
    users: [
      {
        name: "Cody"
      },
      {
        name: "Nataliya"
      }
    ]
  }

  showFullNameHandler = () => {
    this.setState( {
      users: [
        {
          name: "Cody Jacob Farmer"
        },
        {
          name: "Nataliya Pogodina-Farmer"
        }
      ]
    })
  }

  changeNameHandler = (event) => {
    this.setState( {
      users: [
        {
          name: event.target.value
        },
        {
          name: "Nataliya"
        }
      ]
    })
  }

  changeNameHandler2 = (event) => {
    this.setState( {
      users: [
        {
          name: "Cody"
        },
        {
          name: event.target.value
        }
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <Button primary className="top-btn" onClick={this.showFullNameHandler}>Show Full Names</Button>
        <Divider />
        <UserInput changed={this.changeNameHandler} username={this.state.users[0].name}/>
        <UserOutput username={this.state.users[0].name}/>
        <Divider />
        <UserInput changed={this.changeNameHandler2}/>
        <UserOutput username={this.state.users[1].name}/>
      </div>
    );
  }
}

export default App;
