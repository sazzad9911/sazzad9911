import "./Header.css"
import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container'
import { Navbar, Nav, Button } from 'react-bootstrap'
import logo from '../files/Screenshot__3__edited-removebg-preview.png';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link, NavLink
} from "react-router-dom";
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { FcAbout, FcGraduationCap, FcWorkflow, FcApprove, FcOnlineSupport, FcLike, FcOk } from 'react-icons/fc';

const styles = {
    menus: {
        color: 'white',
        textDecoration: 'none',
        fontSize: '16px'
    },
    icons: {
        margin: '10px',
    }
}
const Header = (props) => {
    return (
        <Navbar variant="dark" style={{ backgroundColor: '#154360' }}>
            <Container>
                <Navbar.Brand href="/">
                    <img
                        alt="brand image"
                        src={logo}
                        width="70"
                        height="60"
                        className="d-inline-block align-top"
                    />{' '}
                </Navbar.Brand>
                <Nav className="me-auto" style={{ color: 'white', fontFamily: 'sans-serif', fontSize: '20px' }}>
                    MD.SAZZAD HOSSAIN
                </Nav>
                <div className="menus">
                    <div className="max-width">
                        <Nav className="me-auto">
                            <Link to='/' style={styles.menus}><FcAbout style={styles.icons} size={25} />About</Link>
                            <Link to='/education' style={styles.menus}><FcGraduationCap style={styles.icons} size={25} />Education</Link>
                            <Link to='/projects' style={styles.menus}><FcWorkflow style={styles.icons} size={25} />Projects</Link>
                            <Link to='/experience' style={styles.menus}><FcApprove style={styles.icons} size={25} />Experience</Link>
                            <Link to='/hobbies' style={styles.menus}><FcLike style={styles.icons} size={25} />Hobbies</Link>
                            <Link to='/contacts' style={styles.menus}><FcOnlineSupport style={styles.icons} size={25} />Contacts</Link>
                        </Nav>
                    </div>
                    <div className='min-width'>
                        <button className='menu-button' onClick={()=>props.setMenu('visible')}><AiOutlineMenu size={30} /></button>
                    </div>
                </div>
            </Container>
        </Navbar>
    );
}
export default Header;