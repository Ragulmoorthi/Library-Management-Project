import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
export function Login(){
    function handlelogin(event){
        event.preventDefault()
        var username=document.getElementById("username").value
        var password=document.getElementById("password").value
       
        var key={
            username:username,
            password:password
        }

        if(username=""){
            alert("Enter the username")
        }
        else if(password=""){
            alert("Invalid password")
           
        }
        else{
            axios.post('http://localhost:4005/Login',key)
            .then((res)=>{
                if(res.data.status==="empty_set"){
                    alert("invalid user")
                }
                else if(res.data.status==="success"){
                    
                    alert("login successly")
                    window.location.href=`/Details`
                }
                else if(res.data.status==="invalid user"){
                    alert("invalid password")
                }
                else if(res.data.status==="Both_are_invalid"){
                    alert("username and password are invalid")
                }
                else{
                    alert("contact admin")
                }
            })
        }
    }
    return(
        <>
        <div className="loginPage ">

        <form onSubmit={handlelogin} className=" d-flex justify-content-center "> 
        <div className="loginTable p-5 ">

             <table className="loginTab">

                <tr>
                <td className="p-5 mt-5"><input type="text" placeholder="E-mail" id="username" className="p-2"/></td>
                </tr>
                <tr>
                    <td className="p-5"><input type="password" placeholder="Password" id="password" className="p-2"/></td>
                </tr>
                <tr >
                    <td className="p-5 gap-3 "><input type="submit" value="Login" className="btn btn-outline-success gap-3  mx-3" /> </td>
                
              
                </tr>
             </table>
        
        </div>
        </form>
        </div>
        </>
    );
}