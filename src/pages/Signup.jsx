
import React, { useState } from 'react'
import './Signup.css'
function Signup() {
    let [name,setName]=useState("")
    let [rollno,setRollno]=useState("")
    let [email,setEmail]=useState("")
    let [password,setPassword]=useState("")
    function signupForm(e){
        e.preventDefault()
        alert(`Name: ${name} RollNo: ${rollno} Email: ${email} Password: ${password}`)
    }
  return (
    <div>
        <form onSubmit={(e) => signupForm(e)}>
            <div>
                <span>Name: </span>
                <input type="text" name='name' placeholder='Enter your name' onChange={(e) => setName(e.target.value)} />
            </div>
            <br/>
            <div>
                <span>RollNo: </span>
                <input type="text" name='rollno' placeholder='Enter your roll number' onChange={(e) => setRollno(e.target.value)} />    
            </div>
            <br/>
            <div>
                <span>Email: </span>
                <input type="email" name='email' placeholder='Enter your email' onChange={(e) => setEmail(e.target.value)} />
            </div>
            <br/>
            <div>
                <span>Password: </span>
                <input type="password" name='password' placeholder='Enter your password' onChange={(e) => setPassword(e.target.value)} />
            </div>
            <br/>
            <button>Signup</button>
        </form>
    </div>
  )
}

export default Signup