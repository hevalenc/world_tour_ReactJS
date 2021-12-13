import styled from 'styled-components';

export const Main = styled.div`
    position: relative;
    float: left;
    width: 900px;
    height: 500px;
    margin-left: 20px;
    margin-top: -20px;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;

    .home{
        color:red;
        text-align:center;
    }

    .home-img{
        position: relative;
        float: right;
        margin-top: 10px;
    }
`

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
