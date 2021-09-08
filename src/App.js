import logo from './files/Screenshot__3__edited-removebg-preview.png';
import './App.css';
import './components/Header.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './components/Header';
import Home from './components/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import React,{useState} from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { FcAbout, FcGraduationCap, FcWorkflow, FcApprove, FcOnlineSupport, FcLike, FcOk } from 'react-icons/fc';
import { useDetectClickOutside } from 'react-detect-click-outside';
import { useSpring, animated } from 'react-spring';
import Footer from './components/Footer';

function App() {
  const [menu,setMenu]=useState('hidden');
  const spring = useSpring({to:{opacity:1},from:{opacity:0}});
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
const MenuBody = () => {
  const ref = useDetectClickOutside({ onTriggered: () =>setMenu('hidden') });
  return (
      <animated.div className="menu-body" style={{ visibility: menu }} ref={ref}>
          <button className="menu-button">
              <AiOutlineClose size={25} onClick={() => setMenu('hidden')} />
          </button>
          <animated.div className='menu-header' style={spring}>
              <div className='menu-list'><Link to='/' style={styles.menus}><FcAbout style={styles.icons} size={25} />About</Link></div>
              <div className='menu-list'><Link to='/education' style={styles.menus}><FcGraduationCap style={styles.icons} size={25} />Education</Link></div>
              <div className='menu-list'><Link to='/projects' style={styles.menus}><FcWorkflow style={styles.icons} size={25} />Projects</Link></div>
              <div className='menu-list'><Link to='/experience' style={styles.menus}><FcApprove style={styles.icons} size={25} />Experience</Link></div>
              <div className='menu-list'><Link to='/hobbies' style={styles.menus}><FcLike style={styles.icons} size={25} />Hobbies</Link></div>
              <div className='menu-list'><Link to='/contacts' style={styles.menus}><FcOnlineSupport style={styles.icons} size={25} />Contacts</Link></div>
          </animated.div>
      </animated.div>
  )
}
  return (
    <div className="app">
      <Router>
        <Header setMenu={menu=>setMenu(menu)}></Header>
        <Switch>
          <Route path="/">
            <Home></Home>
          </Route>
        </Switch>
        <MenuBody></MenuBody>
      </Router>
    </div>
  );
}

export default App;
