import React from 'react';

import './UserOutput.css';

const UserOutput = (props) => {
  return (
    <div className="output-container" >
      <p>Username: {props.username}</p>
      <p>Hello World</p>
    </div>
  )
}

export default UserOutput;