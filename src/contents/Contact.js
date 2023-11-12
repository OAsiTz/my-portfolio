import React, { Component } from "react";
import Social from "../components/Social";

class Contact extends Component{
    render(){
        return(
            <div className="condiv">
                <h1 className="subtopic">Contact Me</h1>
                <h3>Email : chayaponpantasu@gmail.com</h3>
                <h3>instagram : chapts.z</h3>
                <h3>facebook : Chayapon Pantasu</h3>
                <h3>Github : OAsiTz</h3>
                <h3>Tel. : 097-275-5219</h3>
                <Social/>

            </div>
        );
    }
}

export default Contact;