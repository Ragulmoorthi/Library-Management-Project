import axios from "axios";
import React from "react";
export function IssueBook(){
    function handlelogin(event){
        event.preventDefault()
    var member_id=document.getElementById("member_id").value
    var book_id=document.getElementById("book_id").value
    var date=document.getElementById("date").value
    var dueday=document.getElementById("dueday").value
    var key={
        member_id:member_id,
        book_id:book_id,
        date:date,
        dueday:dueday
    }
    if (member_id==""){
        alert("Enter the member_id")
    }
    else if(book_id==""){
        alert("Enter the book_id")
    }
    else if(date==""){
        alert("Enter the date")
    }
    else if(dueday==""){
        alert("Enter the duedate")
    }
   
    else{
        axios.post("http://localhost:4005/issuebook",key)
        .then((res)=>{
            if(res.data.status==="error"){
                alert("Book not taken")
                window.location.reload()
            }
            else if(res.data.status==="limit reached"){
                alert("you have reched your limit")
            }
            else if(res.data.status==="success"){
             alert("order")
             window.location.href='/Transanactionpage'
            }
            
        })
    }
}
    return(
        <>
        <div className="issuePage d-flex justify-content-center align-items-center">
            <div className="issueDiv text-center rounded-5 p-5 h-50 ">

        <form onSubmit={handlelogin}>
            <table>

            <tr><td><input type="text" className="mt-3 text-dark" placeholder="Enter the Member id" id="member_id"/></td></tr>
            <tr><td><input type="text" className="mt-3 text-dark" placeholder="Enter the Book id" id="book_id"/></td></tr>
            <tr><td><input type="text" className="mt-3 text-dark" placeholder="Enter the dueday" id="dueday"/></td></tr>
            
            <tr><td><input type="date" className="mt-3 text-dark" placeholder="mm/dd/yyyy" id="date"/></td></tr>
            
            <input type="submit" value="Issue" className="btn btn-outline-primary mt-4"/>
            <h4 className="text-dark">Note:if the member has outstanding more than 500 then unable to issue book</h4>
            </table>
        </form>
            </div>
        </div>
        </>
    );
}