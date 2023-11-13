import axios from 'axios'
import React, { useCallback, useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'

export default function Login() {
    const [logdata, setLogData] = useState({
        "UserID" : "",
        "password" : "",

    })
    let histoty = useNavigate()
    
    const handleChange = (e) =>{
        setLogData({...logdata,[e.target.name]:e.target.value})
    }
    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log(logdata);
        if(logdata.UserID == "" || logdata.password == ""){
            alert("Enter Credentails")
        }
        else{
            axios.post("http://127.0.0.1:8000/checkLogin/", logdata)
            .then((response) =>{
                console.log(response.data);
                if(response.data.status == 400){
                    alert("Wrong Credentails")
                }
                else{
                    
                    histoty("/StudentData")
                }

        })
    }

        

        
    }

  return (
    <>
      <div className='login center'>
        <div className='log'>
            Login
        </div>
        <div>
            <form onSubmit={handleSubmit} action="">
                <label htmlFor="UserID">User ID</label>
                <input type="text" name='UserID' required value={logdata.UserID}  onChange={handleChange}/><br />
                <label htmlFor="password">Password</label>
                <input type="password" name='password' value={logdata.password} onChange={handleChange}/>
                <input type="submit" className='button' value="Login" />
            </form>  
        </div>
        
        
      </div>

    </>
  )
}
