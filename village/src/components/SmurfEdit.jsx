import React, { Component } from "react";
import axios from "axios";
class SmurfEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      age: "",
      height: ""
    };
  }

  componentDidUpdate() {
    axios
      .get(`http://localhost:3333/smurfs/${this.props.match.params.id}`)
      .then(res => {
       this.setState( prevState=> ({
          name:prevState.res.data.name,
          age: res.data.age,
          height: res.data.height
        }));
      })
      .catch(err => console.log(err));
  }

  onSubmit = e => {
    e.preventDefault();
    this.props.updateSmurf(this.state);
    this.setState({
      name: "",
      age: "",
      height: ""
    });

    this.props.history.push("/");
  };

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    console.log(this.props);
    return (
      <div className="SmurfForm">
      <h1>Edit</h1>
        <form onSubmit={this.onSubmit}>
          <input
            onChange={this.handleInputChange}
            placeholder="name"
            value={this.state.name}
            name="name"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="age"
            value={this.state.age}
            name="age"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="height"
            value={this.state.height}
            name="height"
          />
          <button type="submit">Add to the village</button>
        </form>
      </div>
    );
  }
}

export default SmurfEdit;
