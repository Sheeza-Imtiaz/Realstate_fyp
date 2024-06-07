import React from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css'
// import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
    const navigate = useNavigate();
    const onClickLogout = async () => {
        try {
            sessionStorage.removeItem('logdata');
            sessionStorage.removeItem('token');
            navigate('/Login');
            console.log("called")
        } catch (error) {
            console.error('Error occurred during logout:', error);
        }
    }
    return (
        <aside>
            <nav>
                <ul>
                    <li>
                        <NavLink to="" activeClassName="active">
                            <i className="fas fa-tachometer-alt"> Dashboard</i>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/Users" activeClassName="active">
                            <i className="fas fa-users"> Users</i>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/Addpro" activeClassName="active">
                            <i className="fas fa-book-open"> Add Properties</i>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/Prodetail" activeClassName="active">
                            <i className="fas fa-user-plus"> Properties</i>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/Pricingplan" activeClassName="active">
                            <i className="fas fa-user-plus"> Pricing Plan</i>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="profile" activeClassName="active">
                            <i className="fas fa-user-edit"> Profile</i>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink onClick={() => onClickLogout()}>
                            <i className="fas fa-sign-out-alt"> Logout</i>
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </aside>
    );
};

export default Sidebar;


