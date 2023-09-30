import axios from "axios";
import React from "react";
export function AddingBook() {
    function handlelogin(event) {
        event.preventDefault()
        var bookname = document.getElementById("bookname").value
        var authorname = document.getElementById("authorname").value
        var rent = document.getElementById("rent").value
        var quantity = document.getElementById("quantity").value
        var key = {
            bookname: bookname,
            authorname: authorname,
            quantity: quantity,
            rent: rent,
        }
        if (bookname == "") {
            alert("Enter the Book light")
        }
        else if (authorname == "") {
            alert("Enter the Book authorname")
        }
        else if (quantity == "") {
            alert("Enter the Book fees")
        }
        else if (rent == "") {
            alert("Enter the Book quantity")
        }

        else {
            axios.post("http://localhost:4005/add", key)
                .then((res) => {
                    if (res.data.status === "error") {
                        alert("book are not insert")
                        window.location.reload()
                        console.log(key)
                    }
                    else if (res.data.status === "success") {
                        alert("book are insert")
                        window.location.href ='/Books'
                    }
                })

        }
    }
    return (
        <>
            <div className="addBook d-flex justify-content-center align-items-center">
                <div className="addingBook text-center rounded-5 p-5 h-50 ">

                <form onSubmit={handlelogin}>
                    <table cellPadding='10px'>

                    <tr>
                        <td><input type="text" placeholder="Book title" id="bookname" /></td>
                    </tr>
                    <tr>
                        <td><input type="text" placeholder="Author name" id="authorname" /></td>
                    </tr>
                    <tr>
                        <td><input type="text" placeholder="Rent Fees" id="rent" /></td>
                    </tr>
                    <tr>
                        <td><input type="text" placeholder="quantity" id="quantity" /></td>
                    </tr>
                    <tr><td><input type="submit" value="Add" className="btn btn-outline-primary" /></td></tr>
                    </table>
                </form>
                </div>
            </div>
        </>
    );
}