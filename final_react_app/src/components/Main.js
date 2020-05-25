import React from "react";
import Profiles from "./Profiles.js";
import NewProfile from './NewProfile.js';

function Main(props) {
    console.log(props);
    const { handleUpdate, handleDelete, profiles } = props;
    return (
      <main>
        <Profiles
          profiles={profiles}
          handleDelete={handleDelete}
          handleUpdate={handleUpdate}
        />
        <NewProfile handleSubmit={props.handleSubmit} />
      </main>
    );
  }
  
  export default Main;