import styled from 'styled-components';
import world_map from './Images/world_map.png';

export const Page = styled.div`
    position:relative;
    float:left;
    margin: 30px 0 0 -15px;
    writing-mode: vertical-rl;
    text-orientation: upright;
    text-align: center;
    font-family: 'Apple Chancery', cursive;
    color: white;
    text-shadow: 2px 2px 10px black, 2px 2px 10px black;
`

export const MapCard = styled.div`
    position: relative;
    float: left;
    margin-left: -15px;
    width: 770px;
    height: 500px;
    background-image: url(${world_map});
    background-size: contain;
    background-repeat: no-repeat;
`

export const InfoCard = styled.div`
    position: relative;
    float: left;
    width: 330px;
    height: 500px;
    padding: 0 5px;
    font-style: italic;
    font-weight: 600;
    line-height: 20px;

    .header{
        margin: 0;
        font-family: 'Impact', 'fantasy';
        color: red;
    }

    h2{
        width: 160px;
        margin-top: 10px;
    }

    .compass{
        width: 100%;
        margin-top: 100px;
        position: absolute;
    }

    .text{
        text-align: center;
    }
    
    .flag{
        position: relative;
        float: right;
        margin-top: 5px;
        z-index: -1;
        right: 0;
        top: 0;
    }
`