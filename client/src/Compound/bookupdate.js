import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
export function Bookupda() {
    var { book_id } = useParams()
    const [fee_per_day, setFee_per_day] = useState()
    const [quantity, setQuantity] = useState()

    useEffect(() => {
        fetch("http://localhost:4005/onedata/" + book_id)
            .then(res => res.json())
            .then((data) => {
                console.log(data);


                setFee_per_day(data[0].fee_per_day)
                setQuantity(data[0].quantity)
            })
            // console.log(data)
    }, [])
    console.log(book_id)
    function handleupdate(event) {
        event.preventDefault()
        var fee_per_day = document.getElementById("fee_per_day").value
        var quantity = document.getElementById("quantity").value


        var key = {
            // fees: fees,
            fee_per_day:fee_per_day,
            quantity: quantity

        }
        if (fee_per_day == "") {
            alert("enter new fee_per_day")
        }
        else if (quantity == "") {
            alert("Enter new quantity")
        }
        else {
            axios.put('http://localhost:4005/update/'+book_id, key)
                .then((res) => {
                    if (res.data.status === "error") {
                        alert("Recheck")
                        // console.log(res.data.status);
                       
                    }
                    else if (res.data.status === "success") {
                        alert("updated")
                    }
                })
        }
    }
    return (
        <>
            <form onSubmit={handleupdate}>
                <tr>
                    <td><input type="text" placeholder="quantity" id="quantity" value={quantity} onChange={(a) => setQuantity(a.target.value)} /></td>
                </tr>
                <tr>
                    <td><input type="text" placeholder=" Fees" id="fee_per_day" value={fee_per_day} onChange={(a) => setFee_per_day(a.target.value)} /></td>
                </tr>
                <tr><td><input type="submit" value="Add" className="btn btn-outline-primary" /></td></tr>
            </form>
        </>
    );
}