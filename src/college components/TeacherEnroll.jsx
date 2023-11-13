import React, { useState } from 'react'
import './student.css'
import axios from 'axios';
import ResponsiveAppBar from './Navbar';
export default function TeacherEnroll() {
  const [teacherData, setTeacherData] = useState({
    Name:"",
    Subject:"",
    Gender:"",
    Mobile:"",
    Email:"",
  })
  
  
  const handleChange = (e) => {
    setTeacherData({...teacherData, [e.target.name] : e.target.value});
    
  }
  const handlesubmit = (e) =>{
    e.preventDefault();
    const tdata = {
      "Name":teacherData.Name,
      "Subject":teacherData.Subject,
      "Gender":teacherData.Gender,
      "Mobile":parseInt(teacherData.Mobile),
      "Email":teacherData.Email,
    }
    console.log(teacherData);
    console.log(tdata);
    if(teacherData.Name === "" && teacherData.Subject==="" && teacherData.Gender==="" && teacherData.Gender===""){
      alert("Enter all details")
    }
    else{
      axios.post('http://127.0.0.1:8000/posteacher/',tdata)
      .then((response) => {
        console.log(response.data)
        if(response.status === 200){
          alert("Teacher enrolled successfully");
        }
      })
    }
  }
  
  
  
  return (
    <>
      <div className='fixed-top'>
      <ResponsiveAppBar/>
     </div>
      <div className='center'>
        <div style={{textAlign:"center"}}>
        <form action="" onSubmit={handlesubmit} className='back'>
          <label htmlFor="Name">Name </label>
          <input type="text" name='Name' value={teacherData.Name} onChange={handleChange} /><br/>
          <label htmlFor="Class">Subject </label>
          <select name="Subject" value={teacherData.Subject} onChange={handleChange}>
            <option value="select">Select</option>
            <option value="Telugu">Maths I</option>
            <option value="English">Maths II</option>
            <option value="Hindi">C Language</option>
            <option value="Maths">Java</option>
            <option value="Physics"></option>
            <option value="Chesmistry">Chesmistry</option>
            <option value="Social">Social</option>
            <option value="Biology">Biology</option>
          </select><br />
          <label htmlFor="Gendr">Gender</label>
          <select name="Gender" value={teacherData.Gender} onChange={handleChange}>
            <option value="Select">Select</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select><br />
          <label htmlFor="Mobile">Mobile </label>
          <input type="text" name='Mobile' value={teacherData.Mobile} onChange={handleChange}/><br />
          <label htmlFor="Email">Email </label>
          <input type="Email" name='Email' value={teacherData.Email} onChange={handleChange}  /><br />
          <input type="submit" className='button' name='Enroll' value='Enroll' />
          
        </form>
        </div>
      </div>
    </>
  )
}