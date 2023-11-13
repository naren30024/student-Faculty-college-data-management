import React from 'react'
import { useState, useEffect } from 'react'
import './student.css'
import ResponsiveAppBar from './Navbar'

export default function TeacherData() {
    const[data, setData] = useState([])
    const apidata = fetch('http://127.0.0.1:8000/geteacher/')
                    .then((res) => res.json())
                    
    useEffect(() => {
        apidata.then((json) => setData(json))
    },[])
    
  return (
    <>
      <div className='fixed-top'>
      <ResponsiveAppBar/>
     </div>
      <div className="container sdata">
        <table className="table table-bordered">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Subject</th>
                    <th>Gender</th>
                    <th>Mobile</th>
                    <th>Email</th>
        
                </tr>
            </thead>
            <tbody>
                {data.map((sdata) => 
                  <tr>
                    <td>{sdata.Name}</td>
                    <td>{sdata.Subject}</td>
                    <td>{sdata.Gender}</td>
                    <td>{sdata.Mobile}</td>
                    <td>{sdata.Email}</td>
                    
                  </tr>
                )}
            </tbody>
        </table>
      </div>

    </>

  )
}
