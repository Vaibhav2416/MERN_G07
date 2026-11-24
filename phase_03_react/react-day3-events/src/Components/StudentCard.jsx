import React from 'react'

const StudentCard = ({std}) => {
  return (
    <div>
        <img src={std.url} alt="" />
        <h1>Name: {std.name}</h1>
        <h2>Age: {std.age}</h2>
        <p>Email: {std.email}</p>
    </div>
  )
}

export default StudentCard