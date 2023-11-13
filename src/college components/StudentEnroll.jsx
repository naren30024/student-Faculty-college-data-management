import React, { useState } from 'react'
import './student.css'
import axios from 'axios';
import ResponsiveAppBar from './Navbar';
export default function StudentEnroll() {
  const [studentData, setSudentData] = useState({
    Name:"",
    Branch:"",
    Year:"",
    RollNo:"",
    Mobile:"",
    Email:"",
    Father:"",
    Mother:"",
    ParentMobile:"",
  })
  
  
  const handleChange = (e) => {
    setSudentData({...studentData, [e.target.name] : e.target.value});
    
  }
  const handlesubmit = (e) =>{
    e.preventDefault();
    const sddata = {
      "Name":studentData.Name,
      "Branch":studentData.Branch,
      "Year":studentData.Year,
      "RollNo":studentData.RollNo,
      "Mobile":parseInt(studentData.Mobile),
      "Email":studentData.Email,
      "Father":studentData.Father,
      "Mother":studentData.Mother,
      "ParentMobile":parseInt(studentData.ParentMobile),
    }
    console.log(studentData);
    console.log(sddata);
    if (studentData.Name === "" && studentData.Class === "" && studentData.RollNo === "" && studentData.Mobile ==="" && studentData.Email === ""){
      alert("Please Enter All Details")
    }
    else{
      axios.post('http://127.0.0.1:8000/poststudent/',sddata)
      .then((response) => {
        console.log(response);
        if(response.status === 200){
          alert("Student Enrolled Sucessfully")
        }
        else if(response.request.status === 401 || response.request.status===400){
          alert("Enter all details correctly ")
        }

      })
    }
  }
  
  
  return (
    <>
     <div className='fixed-top'>
      <ResponsiveAppBar />
     </div>
     <div className='tops'>
      <div className='center'>
        <div style={{textAlign:"center"}} >
        <form action="" onSubmit={handlesubmit} className='back sde'>
          <label htmlFor="Name">Name </label>
          <input type="text" name='Name' value={studentData.Name} onChange={handleChange} /><br/>
          <label htmlFor="Class">Branch </label>
          <select name="Branch" value={setSudentData.Branch} onChange={handleChange}>
            <option value="select">Select</option>
            <option value="CSE">CSE</option>
            <option value="ECE">ECE</option>
            <option value="MECH">MECH</option>
            
          </select><br />
          <label htmlFor="Class">Year </label>
          <select name="Year" value={setSudentData.Year} onChange={handleChange}>
            <option value="select">Select</option>
            <option value="First year">First year</option>
            <option value="Second year">Second year</option>
            <option value="Third year">Third year</option>
            <option value="Fourth year">Fourth year</option>
            
          </select><br />
          <label htmlFor="RollNo">RollNo </label>
          <input type="text" name='RollNo' value={studentData.RollNo} onChange={handleChange} /><br />
          <label htmlFor="Mobile">Mobile </label>
          <input type="text" name='Mobile' value={studentData.Mobile} onChange={handleChange}/><br />
          <label htmlFor="Email">Email </label>
          <input type="Email" name='Email' value={studentData.Email} onChange={handleChange}  /><br />
          <label htmlFor="Father">Father </label>
          <input type="text" name='Father' value={studentData.Father} onChange={handleChange} /><br />
          <label htmlFor="Mother">Mother </label>
          <input type="text" name='Mother' value={studentData.Mother} onChange={handleChange} /><br/>
          <label htmlFor="ParentMobile">ParentMobile</label>
          <input type="text" name='ParentMobile' value={studentData.ParentMobile} onChange={handleChange} /><br />
          <input type="submit" className='button' name='Enroll' value='Enroll' />
          
        </form>
        </div>
      </div>
      </div>
    </>
  )
}
