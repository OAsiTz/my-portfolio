import React, { Component } from 'react';
import Social from '../components/Social';
// import profilepic from '../img/profile.jpg'
import ReactTypingEffect from 'react-typing-effect';

class Home extends Component {
    render() {
        return (
           <div className ="condiv home">
                <img src ="https://scontent.fbkk29-8.fna.fbcdn.net/v/t1.6435-9/118394909_3063366790440852_8492281189214230846_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=be3454&_nc_eui2=AeF2qDMrDQ-pkUfisORZkC0Lk3cAsDt4XdGTdwCwO3hd0Z3hr-fAOJKyn-QE4jCcEQvWhJB3nu08oWr845rFHKnh&_nc_ohc=ik0002tivCoAX_JN3X_&_nc_ht=scontent.fbkk29-8.fna&oh=00_AfBPTeFFEqm3kXkR7_-QdurWdFRoan-kFxlBygknFJbBCw&oe=65718C5A" alt="profile" className='profilepic'/>
                <ReactTypingEffect text={['I am Chayapon','I am a Web Developer']} speed={80} eraseDelay={200} className='typingeffect'/>
                <Social/>
           </div>
        );
    }
}

export default Home; 