import React from 'react';
import './SideBar.scss';
import acorn from '../assets/acorn.png'
import { Link } from 'react-router-dom';

function SideBar(props){
    const { userInfo } = props;
    return (
        <div className="sidebar">
            <div className="sidebar_logo">
            <img src={acorn} alt="site logo"/>
            </div>
            <div className="sidebar_title">
                <span>Diet Challenge</span>
            </div>
            <div className="sidebar_user">
                <p>Hello <span className="userText">{userInfo.name}!</span> </p>
            </div>
            <div className="sidebar_menulist">
                <ul className="sidebar_menulist__lists">
                    <li>
                    <Link to="/">Home</Link>
                    </li>
                    <li>
                    <Link to="/intermittent">Intermittent fasting</Link>
                    </li>
                    <li>
                    <Link to="/runningrecord">Running Record</Link>
                    </li>
                </ul>
            </div>
            <div className="sidebar_social">
            <a href="https://www.facebook.com/dungtc911/"><i className="fa-brands fa-facebook"></i></a>
            <a href="https://www.instagram.com/ga.gya.go/"><i className="fa-brands fa-instagram"></i></a>
            </div>
        </div>
    )
}

export default SideBar;
