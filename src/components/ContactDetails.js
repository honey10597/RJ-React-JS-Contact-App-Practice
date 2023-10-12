import React from 'react';
import fbIcon from "../images/fbIcon.png";
import { useLocation } from 'react-router-dom';

const ContactDetails = (props) => {
    const location = useLocation();
    console.log(location, "location");
    const { name, email } = location.state.contact;

    return (
        <div className='main'>
            <br />
            <br />
            <div className='ui class centered'>
                <div className='image'>
                    <img src={fbIcon} alt='fbIcon' />
                </div>
                <div className='content'>
                    <div className='header'>{name}</div>
                    <div className='description'>{email}</div>
                </div>
            </div>
        </div>
    )
}

export default ContactDetails;
