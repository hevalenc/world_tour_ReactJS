import React, { Component } from 'react';
import styled from 'styled-components';
import world from './Images/world_plane.png';

const Head = styled.div`
    background-image: url(${world});
    background-repeat: no-repeat;
    background-size: contain;
    background-color: #2b2929;
    width: 100hv;
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    margin-bottom: 5px;
    text-shadow: 20px;
`

class Header extends Component {
    render(){
        return(
            <Head>
                <h1 styled={"font-family: URW Chancery L, cursive"}>MY TRIPS AROUND THE WORLD</h1>
            </Head>
        )
    }
}

export default Header