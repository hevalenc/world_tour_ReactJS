import React from 'react';
import { Component } from 'react';
import styled from 'styled-components';

const Foot = styled.div`
    width: 100hv;
    height: 50px;
    position: absolute;
    bottom: 0px;
    margin-left: 550px;
    color: black;
    font-family: 'Snell Roundhand', 'cursive';
    margin-top: 10px;
`

class Footer extends Component {
    render(){
        return(
            <Foot>
                <h4>DEVELOPED BY HEITOR VALENÇA</h4>
            </Foot>
        )
    }
}

export default Footer