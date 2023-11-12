import React, { Component } from 'react';
import ReactTypingEffect from 'react-typing-effect';

class About extends Component {
    render() {
        return (
           <div className ="condiv about">
                <h1 className='subtopic'>About Me</h1>
                <img src ="https://scontent.fbkk29-8.fna.fbcdn.net/v/t1.6435-9/118394909_3063366790440852_8492281189214230846_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=be3454&_nc_eui2=AeF2qDMrDQ-pkUfisORZkC0Lk3cAsDt4XdGTdwCwO3hd0Z3hr-fAOJKyn-QE4jCcEQvWhJB3nu08oWr845rFHKnh&_nc_ohc=ik0002tivCoAX_JN3X_&_nc_ht=scontent.fbkk29-8.fna&oh=00_AfBPTeFFEqm3kXkR7_-QdurWdFRoan-kFxlBygknFJbBCw&oe=65718C5A" alt="profile" className='profilepic'/>
                <h3>Hi, I'm Chayapon Pantasu</h3>
                <p>My name is Chayapon Pantasu. My Nickname is Oat. I'm 21 years Old. I'm currently studying for a bachelor's degree in Computer Electronics Engineering.</p>
           </div>
        );
    }
}

export default About; 