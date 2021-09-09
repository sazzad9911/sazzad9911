import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import './Footer.css'
import { FaFacebook } from 'react-icons/fa'
import { FaInstagramSquare } from 'react-icons/fa'
import { AiOutlineTwitter } from 'react-icons/ai'
import { AiFillLinkedin } from 'react-icons/ai'
import { AiTwotoneMail } from 'react-icons/ai'
import { FaWhatsappSquare } from 'react-icons/fa'
const Footer = () => {

    return (
        <div className='footer-body'>
            <div className='footer-box1'>
                <div>
                    <h2>Links :</h2>
                    <li>About</li>
                    <li>Education</li>
                    <li>Experience</li>
                    <li>Hobbies</li>
                </div>
                <div>
                    <h2>Contacts :</h2>
                    <div><input type='text' placeholder='Name....'></input></div>
                    <div><textarea placeholder='Comment....'></textarea></div>
                    <div><input className='footer-button' type='submit' placeholder='Submit' ></input> </div>
                </div>
            </div>
            <div className='footer-box2'>
                <FaFacebook className='footer-icon' size={30} color='white' />
                <FaInstagramSquare className='footer-icon' size={30} color='white' />
                <AiOutlineTwitter className='footer-icon' size={30} color='white' />
                <AiFillLinkedin className='footer-icon' size={30} color='white' />
                <AiTwotoneMail className='footer-icon' size={30} color='white' />
                <FaWhatsappSquare className='footer-icon' size={30} color='white' />
            </div>
            <div className='copyright'>
                <p style={{textAlign:'center'}}>@Copyright 2021-2121. All right reserved by the Sazzad Hossain.</p></div>
        </div>

    )
}
export default Footer;