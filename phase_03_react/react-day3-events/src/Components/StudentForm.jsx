import React, { useState } from 'react'
import StudentCard from './StudentCard'

const StudentForm = () => {
  const [name,setName]=useState("")
  const [email,setEmail]=useState("")
  const [age,setAge]=useState(17)
  const [url,setUrl]=useState("")
  const [student,setStudent]=useState(null)
  
  const handleSubmit=(event)=>{
    event.preventDefault()
    setStudent({
        name,
        email,
        age,
        url
    })
    // {"name":"Aman" => name:name,"email":"aman@gmail.com"}
  }
  return (
    <div>
        <form onSubmit={handleSubmit} style={{
            border:"1px solid black",
            width:"400px",
            height:"400px",
            display:"flex",
            flexDirection:"column",
            gap:"5px",
            padding:"20px"
        }}>
            <label htmlFor="">Name: </label>
            <input type="text" 
            onChange={(e)=>setName(e.target.value)}
            value={name}
            />
            <br />
            <label htmlFor="">Email: </label>
            <input type="text" onChange={(e)=>setEmail(e.target.value)} value={email}/>
            <br />
            <label htmlFor="">Age: </label>
            <input type="text" onChange={(e)=>setAge(e.target.value)} value={age}/>
            <br />
            <label htmlFor="">ImageUrl: </label>
            <input type="text" onChange={(e)=>setUrl(e.target.value)} value={url}/>
            <br />
            <input type="submit" />
        </form>
        <div>
           {
            student && <StudentCard 
            std={student}
            />
           }
        </div>
    </div>
  )
}

export default StudentForm