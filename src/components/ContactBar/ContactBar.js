import React from 'react';
import "./ContactBar.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import GoogleIcon from "@mui/icons-material/Google";
import PinterestIcon from "@mui/icons-material/Pinterest";
const ContactBar = () => {
    return (
        <div className="contactBar">
            <div className="wrapperContactBar">
                <span>MANDA UM ZAP</span>
                <div className="mail">
                    <input text="text" placeholder="Enter Your Email." />
                    <button>Join Us Comrade</button>
                </div>
                <div className="contactBarIcons">
                    <FacebookIcon />
                    <InstagramIcon />
                    <TwitterIcon />
                    <GoogleIcon />
                    <PinterestIcon />
                </div>
            </div>
        </div>
    );
}



export default ContactBar;