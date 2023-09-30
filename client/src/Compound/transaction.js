import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
export function Transaction(){
    const[transactiondetail,setTransactiondetail]=useState([])

    useEffect(()=>{
        fetch('http://localhost:4005/Transactionlist/')
        .then(res=>res.json())
        .then(data=>setTransactiondetail(data))
    })
   
    var remove = (transaction_id) => {
        axios.post('http://localhost:4005/transactiondelete/'+transaction_id)
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
            <table cellpadding="10px" className="text-center ">
                <tr>
                    <th>transaction_id</th>
                    <th>book_id</th>
                    <th>mumber_id</th>
                    <th>issue_date</th>
                    <th>return_date</th>
                    <th>return_status</th>
                    <th> Fine_Amount</th>
                    <th> Remove</th>
                </tr>
                {
                    transactiondetail.map((value,index) => (
                        <>
                        <tr>
                            <td>{value.transaction_id}</td>
                            <td>{value.book_id}</td>
                            <td>{value.member_id}</td>
                            <td>{value.issue_date}</td>
                            <td>{value.return_date}</td>
                            <td>{value.return_status}</td>
                            <td>{value. Fine_Amount}</td>
                          <td>  <button className="btn btn-outline-danger" onClick={() => { remove(value.transaction_id) }}>Delete</button></td>
                           
                        </tr>
                        </>
                    ))
                }
            </table>
        </div>
        </>
    );
}