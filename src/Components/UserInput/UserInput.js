import React from 'react';

const UserInput = (props) => {
  console.log("props in input", props)
  return (
    <div>
      <input type="text" value={props.value} onChange={props.nameChange} />
    </div>
  )
};

export default UserInput;