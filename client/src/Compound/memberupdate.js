import React from "react";
function Memberupdate(){
    
    return(
        <>
        <form onSubmit={handlelogin} >

<tr>
    <td><input type="text" placeholder="User name" id="name" /></td>
</tr>
<tr>
    <td><input type="text" placeholder="email" id="Email" /></td>
</tr>
<tr>
    <td><input type="text" placeholder="debt" id="debt" /></td>
</tr>

<tr><td><input type="submit" value="Add" className="btn btn-outline-primary" /></td>

</tr>

</form>
        </>
    );
}