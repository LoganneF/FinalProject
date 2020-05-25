import React from 'react'

const Input = props => {
  const {handleChange, name, placeholder, profile, type, value} = props
    return (
      <>
        <label htmlFor={name}>{profile}</label>
        <input
          id={name}
          name={name}
          type={type}
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
        />
      </>
    )
}

export default Input