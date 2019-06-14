import React, { Component } from "react";

import "./App.css";
import SmurfForm from "./components/SmurfForm";
import Smurfs from "./components/Smurfs";
import Navigation from "./components/Navigation";
 import SmurfEdit from  './components/SmurfEdit'

import axios from "axios";

import { withRouter, Route } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: []
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:3333/smurfs")
      .then(res => this.setState({ smurfs: res.data }))
      .catch(err => console.log(err));
  }

  addSmurfs = smurf => {
    axios
      .post("http://localhost:3333/smurfs", smurf)
      .then(res => this.setState({ smurfs: res.data }))
      .catch(err => console.log(err));
    this.props.history.push("/");
  };

  deleteSmurf = id => {
    axios
      .delete(`http://localhost:3333/smurfs/${id}`)
      .then(res => {
        this.setState({
          smurfs: this.state.smurfs.filter(smurf => smurf.id !== id)
        });
      })
      .catch(err => console.log(err));
  };
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  updateSmurf = editSmurf => {
    axios
      .put(`http://localhost:3333/smurfs/${editSmurf.id}`, editSmurf)
      .then(res => {
      
        const newSmurf = this.state.smurfs.filter(
          smurf => smurf.id !== editSmurf.id
        );

        this.setState({
          smurfs: [...newSmurf, res.data]
        });
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="App">
        <Navigation />
        <Route
          exact
          path="/"
          render={props => (
            <Smurfs
              smurfs={this.state.smurfs}
              deleteSmurf={this.deleteSmurf}
              
              {...props}
            />
          )}
        />
        <Route
          exact
          path="/smurf-form"
          render={props => <SmurfForm {...props} addSmurfs={this.addSmurfs} />}
        />

<Route
         exact
					path="/edit/:id"
          render={props => <SmurfEdit {...props} updateSmurf={this.updateSmurf} />}
        />
      </div>
    );
  }
}

export default withRouter(App);
