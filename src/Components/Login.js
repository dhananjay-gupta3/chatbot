import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Login.css'
const Login = () => {
  const navi = useNavigate();
    const [value,setValue] = useState("");
    
    const handlname=(e)=>{
        setValue(e.target.value)
      }
  return (

    <div className='login'>
    <div className='box'>
    <form>
    Log In
    <div className='field'>
    
    <input className='inputes' 
    value={value}
    onChange={handlname}
    type='email'
     placeholder='Enter Email'/>
    
    <input className='inputes' type='password'
     placeholder='password'/>

     
    </div>
    <button className='btnlog' type='login' >Login</button>
    <p className='p'>Create Account
    <a 
    className='link' 
    onClick={()=>navi('/signup')}
    href='http://localhost:3000/signup'>Sign Up</a>
    </p>
    </form>
    </div>
    
    
    </div>
  )
}

export default Login