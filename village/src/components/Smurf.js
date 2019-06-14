import React from 'react';
import { Link } from "react-router-dom";
const Smurf = props => {
  console.log(props)
  return (
    <div className="Smurf">
    <Link to={`/edit/${props.id}`}>
        <button>Edit</button>
      </Link>
      <h3>{props.name}</h3>
      <strong>{props.height} tall</strong>
      <p>{props.age} smurf years old</p>
      <button onClick={()=>props.deleteSmurf(props.id)}>Delete</button>
    </div>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;

