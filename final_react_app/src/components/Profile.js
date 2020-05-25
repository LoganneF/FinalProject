import React from "react";
import ProfileForm from "./ProfileForm.js";

class Profile extends React.Component {
  state = {
    formVisible: false,
  };

  toggleForm = () => {
    this.setState({ formVisible: !this.state.formVisible });
  };

  handleUpdate = (event, profile) => {
    console.log("update running");
    this.props.handleUpdate(event, profile);
    this.toggleForm();
  };

  render() {
    const { profile, handleDelete } = this.props;

    return (
      <>
        {this.state.formVisible ? (
          <ProfileForm
            profile={profile}
            handleSubmit={this.handleUpdate}
            toggleForm={this.toggleForm}
          />
        ) : (
          <div >
            <table>
              <tr className="profile">
                <td>{profile.name}</td>
                <td>{profile.age}</td>
                <td>{profile.diagnosis}</td>
                <td>{profile.behaviors}</td>
                <td>{profile.motivators}</td>
                <td>{profile.communication}</td>
                <td><button onClick={() => handleDelete(profile)}>X</button>
                    <button onClick={this.toggleForm}>Edit this Entry</button>
                </td>
              </tr>
            </table>
            
          </div>
        )}
      </>
    );
  }
}

export default Profile;