import React, { Component } from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';
import airplane from './Images/world.png';

const Nav = styled.div`
    background-image: url(${airplane});
    background-size: cover;
    background-position: -100px;
    position: relative;
    float: left;
    width: 150px;
    height: 500px;
    display: flex;
    color: black;

    ul{
        margin-top: 170px;
        font-weight: bold;
    }

    li{
        margin-top: 10px;
    }
`

export default class NavBar extends Component{
    render(){
        return(
            <Nav>
                <div>
                <ul>PAGES
                    <li>
                        <Link to="/">HOME</Link>
                    </li>
                    <li>
                        <Link to="/maps">WORLD TOUR</Link>
                    </li>
                    <li>
                        <Link to="/gallery">GALLERY</Link>
                    </li>
                    <li>
                        <Link to="/forms">CONTACT</Link>
                    </li>
                </ul>
                </div>
            </Nav>
        )
    }
}
