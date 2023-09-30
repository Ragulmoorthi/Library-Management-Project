import axios from "axios";
import React from "react";
export function Addingmember() {
    function handlelogin(event){
        event.preventDefault()
        var name=document.getElementById("name").value
        var email=document.getElementById("Email").value
        var debt=document.getElementById("debt").value

        var key={
            name:name,
            email:email,
            debt:debt
        }
        if(name==""){
            alert("Enter the name")
        }
        else if(email==""){
            alert("Enter the email")
        }
        else if(debt==""){
            alert("Enter the debt")
        }
         else{
            axios.post("http://localhost:4005/newmember",key)
            .then((res)=>{
                if (res.data.status==="error"){
                    alert("member data not insert")
                }
                else if(res.data.status==="success"){
                    alert("Wellcome")
                    window.location.href='/Memberlistpage'               }
            })
         }
        }
    return (
        <>
           <div className="memberPage d-flex justify-content-center align-items-center">
            <div className="memberDiv text-center rounded-5 p-5 h-50 ">
 
            <form onSubmit={handlelogin} >
<table>

                <tr>
                    <td><input type="text" placeholder="User name" id="name"  className="mt-4"/></td>
                </tr>
                <tr>
                    <td><input type="text" placeholder="email" id="Email" className="mt-4" /></td>
                </tr>
                <tr >
                    <td><input type="text" placeholder="debt" id="debt" className="mt-4" /></td>
                </tr>
               
                <tr><td><input type="submit" value="Add Member" className="btn btn-outline-primary mt-2" /></td>

                </tr>
</table>

            </form>
            </div>
           </div>
        </>
    );
}