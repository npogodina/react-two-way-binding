import React, { Component } from 'react';
import UserOutput from "./components/UserOutput";
import { Button, Divider } from 'semantic-ui-react';

import './App.css';

class App extends Component {
  state = {
    users: [
      {
        id: 1,
        name: "Cody",
        food: "quiche"
      },
      {
        id: 2,
        name: "Nataliya",
        food: "sushi"
      },
      {
        id: 3,
        name: "Evelynn",
        food: "sausage"
      }
    ],
    showUsers: true
  }

  // syntax allow to access this
  toggleUsersHandler = () => {
    const doesShow = this.state.showUsers;
    this.setState({showUsers: !doesShow}); //get merged with previous state
  }

  deleteUserHandler = (userIndex) => {
    // const users = this.state.users.slice(); //creating a copy so that we don't manipulate the original array
    const users = [...this.state.users]; //spread operator; new arr with objects from old arr
    users.splice(userIndex, 1);
    this.setState({users: users});
  }

  changeNameHandler = (event, id) => {
    const userIndex = this.state.users.findIndex(u => {
      return u.id === id;
    });

    const user = {
      ...this.state.users[userIndex]
    };

    user.name = event.target.value;

    const users = [...this.state.users];
    users[userIndex] = user;

    this.setState( {users: users });
  }

  render() {
    // should be inside the render function to run with every update
    let users = null;
    if (this.state.showUsers) {
      users = (
        <div>
          {this.state.users.map((user, index) => {
            return <UserOutput 
                key={user.id}
                username={user.name} 
                food={user.food}
                click={() => this.deleteUserHandler(index)}  // alternative: (?) bind(this, index)
                changed={(event) => this.changeNameHandler(event, user.id)}
            />
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <Button primary className="top-btn" onClick={this.toggleUsersHandler}>Show/Hide Users</Button>
        <Divider />
        {users}
      </div>
    );
  }
}

export default App;
