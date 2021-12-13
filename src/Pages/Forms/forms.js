import styled from 'styled-components';

export const Form = styled.div`
    position: relative;
    float: left;
    width: 900px;
    height: 500px;
    margin-left: 80px;

    p{
        margin-bottom: 30px;
    }

    .forms-container{
        margin-bottom: 15px;
    }

    .forms-img{
        position: relative;
        float: right;
        width: 200px;
        bottom: 230px;
        right: 200px;
    }
    
    .social{
        margin: 5px;
        cursor: pointer;
    }

    .email{
        color: darkblue;
        text-decoration: underline;
        font-weight: bold;
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
