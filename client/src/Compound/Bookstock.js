import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
// import { CSVLink } from "react-csv";
export function Bookstock() {
    const [fetchdetail, setFetchdetail] = useState([])

    
    useEffect(() => {
        fetch('http://localhost:4005/bookstock/')
            .then(res => res.json())
            .then(data => setFetchdetail(data))
    })
    
    return (
        <>
    <div className="bookTab">

            <h1 className="text-center  text-white p-2">Details</h1>
         {/* <CSVLink data={fetchdetail} ><button>Dowanload</button></CSVLink> */}
            <div className="d-flex justify-content-center bookStock">
                <table cellpadding="10px" className="text-center ">
         <Link to={`/Adding`}><input type="button"  value="Add Book"  className="btn btn-success"/> </Link>
                    <tr>
                        <th>id</th>
                        <th>title</th>
                        <th contentEditable="true">author</th>
                        <th>quantity</th>
                        <th>fees</th>
                        <th>Action</th>
                        <th>Booking</th>
                    </tr>
                    {
                        fetchdetail.map((value, index) => (
                            <>
                                <tr className="">
                                    <td>{value.book_id}</td>
                                    <td>{value.title}</td>
                                    <td>{value.author}</td>
                                    <td>{value.quantity}</td>
                                    <td>{value.fee_per_day}</td>
                                    <td className="gap-3 text-decoration-none"><Link to={`/bookupdate/${value.book_id}`} className="btn btn-light">Update</Link></td>
                                   <td> <Link to={`/order`} className=" btn btn-warning">Issue book</Link></td>
                                    
                                    
                                </tr>
                            </>
                        ))
                    }
                    </table>
                    </div>
        </div>

                </>
                );
}