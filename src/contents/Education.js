import React, { Component } from "react";
import Widecard from '../components/Widecard'
class Education extends Component {
    render() {
        return(
            <div className ="condiv">
                <h1 className="subtopic">My Education</h1>
                <Widecard title="Engineering" where="King Mongkut's University of Technology North Bangkok" from="2020" to="present"/>
                <Widecard title="Vocational certificate" where="KONG THABBOK UPATHAM CHANGKOL KHO SO THO BO SCHOOL" from="2017" to="2020"/>
                <Widecard title="Mattayom" where="chonprathan wittaya school" from="2011" to="2017"/>
                <Widecard title="Primary education" where="Anurajaprasit School" from="2008" to="2011"/>
            
            </div>
        )
    }
}

export default Education;