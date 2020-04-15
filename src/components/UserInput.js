import React from 'react';
import { Input } from 'semantic-ui-react';
import './UserInput.css';

export default function UserInput(props) {
  return (
    <div>
      <Input type="text" onChange={props.changed} value={props.username}></Input>
    </div>
  )
}
