import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
export function Member(){
    const [memberdetail,setMemberdatail]=useState([])

    useEffect(()=>{
        fetch('http://localhost:4005/Memberlist/')
        .then(res=>res.json())
        .then(data=>setMemberdatail(data))
    })
    
 
    var delt = (member_id) => {
      axios.post('http://localhost:4005/delete/'+member_id)
            .then((res) => {
                if (res.data.status === "error") {
                    alert("data are not delete")
                }
                else if (res.data.status === "success") {
                    alert("data are deleted")
                }
            })
    }

    return(
        <>
        <div className="bookTab d-flex align-items-center justify-content-center">
            <table className="text-center " cellpadding="10px">
            <Link to={`/Addinguser`}> 
         <input type="button"  value="Add New Member"  className="btn btn-outline-success"/>
         
          </Link>
                <tr>
                    <th>member-id</th>
                    <th>Name</th>
                    <th>email</th>
                    <th>outstanding_debt</th>
                    <th>Action</th>
                </tr>
                {
                    memberdetail.map((value,index) => (
                        <>
                        <tr>
                            
                            <td >{value.member_id}</td>
                            <td contentEditable="true">{value.name}</td>
                            <td>{value.email}</td>
                            <td>{value.outstanding_debt}</td>
                            <td>
                                {/* <Link to={`/update/${value.member_id}`}>Update</Link> */}
                             <button className="btn btn-danger" onClick={() => { delt(value.member_id) }}>Delete</button></td>
                            
                        </tr>
                        </>
                    ))
                }
            </table>
        </div>
        </>
    );
}