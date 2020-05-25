import React from 'react';
import Profile from   './Profile.js'; 

function Profiles(props) {
    const { handleUpdate, profiles, handleDelete } = props;
    return (
      <div>
        {profiles.map((profile) =>( 
        <Profile 
            key={profile.id} 
            profile={profile}
            handleDelete={handleDelete}
            handleUpdate={handleUpdate}
        />
        ))}
      </div>
    );
}
 
export default Profiles;