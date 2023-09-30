import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import 'aos/dist/aos.css'
import Aos from "aos";
export function Optionpage() {
    useEffect(()=>{
        Aos.init({
        
        });
    })
    return (
        <>
            <div className="stockPage">   
                <h1 className="text-center text-light h1tag" data-aos="fade-up">Welcome To the Library </h1>

                <div className="text-center d-flex justify-content-evenly mt-5">

                    <Link to={`/Books`}><button type="button" class="rounded-5 custom-button " >Book Details</button></Link>
                    <Link to={`/Memberlistpage`}><button type="button" class="rounded-5 custom-button ">Member Details</button></Link>
                    <Link to={`/Transanactionpage`}><button type="button" class="rounded-5  custom-button ">Transaction Details</button></Link>
                </div>
            </div>
        </>
    );
}