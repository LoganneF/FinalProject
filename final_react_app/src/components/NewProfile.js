import React from 'react'
import ProfileForm from './ProfileForm.js'

function NewProfile(props) {
    return (
      <div className="add-profile">
        <ProfileForm handleSubmit={props.handleSubmit}/>
      </div>
    )
}

export default NewProfile