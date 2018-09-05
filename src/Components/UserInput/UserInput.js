import React from 'react';

import './UserInput.css';

const UserInput = (props) => {
  // console.log("props in input", props)
  return (
    <div className="input-container" >
      <input type="text" value={props.value} onChange={props.nameChange} />
    </div>
  )
};

export default UserInput;