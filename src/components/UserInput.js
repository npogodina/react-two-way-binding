import React from 'react';
import { Input } from 'semantic-ui-react';
import './UserInput.css';

export default function UserInput(props) {
  return (
    <div>
      <Input type="text" value={props.username} onChange={props.changed}></Input>
    </div>
  )
}
