import React from "react";
import Input from "./Input.js";

class ProfileForm extends React.Component {
  state = {
    name: "",
    age: "",
    diagnosis: "",
    behaviors: "",
    motivators: "",
    communication: "",
  };

  handleChange = (event) => {
    this.setState({ [event.target.id]: event.target.value });
  };

  handleSubmit = (event) => {
    console.log("running");
    event.preventDefault();

    const { name, age, diagnosis, behaviors, motivators, communication } = this.state;
    const profile = {
        name: name,
        age: age,
        diagnosis: diagnosis,
        behaviors: behaviors,
        motivators: motivators,
        communication: communication
    };

    if (this.props.profile) profile.id = this.props.profile.id;

    this.props.handleSubmit(event, profile);
  };

  componentDidMount() {
    if (this.props.profile) {
      const { name, age, diagnosis, behaviors, motivators, communication, id } = this.props.appointment;
      this.setState({
        name: name || "",
        age: age || "",
        diagnosis: diagnosis || "",
        behaviors: behaviors || "",
        motivators: motivators || "",
        communication: communication || "",
        id: id || "",
      });
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <Input
          handleChange={this.handleChange}
          name={"name"}
          placeholder={"Name"}
          type={"text"}
          value={this.state.name}
          id={"name"}
        />
        <Input
          handleChange={this.handleChange}
          name={"age"}
          placeholder={"Age"}
          type={"text"}
          value={this.state.age}
          id={"age"}
        />
        <Input
          handleChange={this.handleChange}
          name={"diagnosis"}
          placeholder={"Diagnosis"}
          type={"text"}
          value={this.state.diagnosis}
          id={"diagnosis"}
        />
        <Input
          handleChange={this.handleChange}
          name={"behaviors"}
          placeholder={"Behaviors"}
          type={"text"}
          value={this.state.behaviors}
          id={"behaviors"}
        />
        <Input
          handleChange={this.handleChange}
          name={"motivators"}
          placeholder={"Motivators"}
          type={"text"}
          value={this.state.motivators}
          id={"motivators"}
        />
        <Input
          handleChange={this.handleChange}
          name={"communication"}
          placeholder={"Communication"}
          type={"text"}
          value={this.state.communication}
          id={"communication"}
        />
        <input
          type="submit"
          value={this.props.profile ? "update profile" : "add a profile"}
        />
      </form>
    );
  }
}

export default ProfileForm;
