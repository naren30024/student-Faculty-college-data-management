import axios from 'axios';
import React, { useEffect, useState } from 'react'
import ResponsiveAppBar from './Navbar';

export default function Sudentdata() {
    const[data, setData] = useState([])
    const apidata = fetch('http://127.0.0.1:8000/getstudent/')
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
                    <th>Branch</th>
                    <th>Year</th>
                    <th>RollNo</th>
                    <th>Mobile</th>
                    <th>Email</th>
                    <th>Father</th>
                    <th>Mother</th>
                    <th>ParentMobile</th>
                </tr>
            </thead>
            <tbody>
                {data.map((sdata) => 
                  <tr>
                    <td>{sdata.Name}</td>
                    <td>{sdata.Branch}</td>
                    <td>{sdata.Year}</td>
                    <td>{sdata.RollNo}</td>
                    <td>{sdata.Mobile}</td>
                    <td>{sdata.Email}</td>
                    <td>{sdata.Father}</td>
                    <td>{sdata.Mother}</td>
                    <td>{sdata.ParentMobile}</td>

                  </tr>
                )}
            </tbody>
        </table>
      </div>

    </>

  )
}
