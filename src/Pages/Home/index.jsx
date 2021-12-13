import React, { Component } from "react";
import { Main, Page } from "./home";
import home from './Images/home.jpg';

export default class Home extends Component{
    render(){
        return(
            <>
                <Page>
                    <h2>HOME</h2>
                </Page>
                <Main>
                    <h1 className="home">WELCOME !!!</h1>
                    <p>
                        My name is Heitor Valença and I'm Software Engineering student at IESB.
                    </p>
                    <p>
                        I developed this website to put in practice the knowledge I had acquire through several courses in JavaScript and ReactJS.
                    </p>
                    <p>
                        I worked at Embraer for 21 years and had opportunity to travel to many countries to support the E-Jets Fleet in different airlines with technical support and maintenance training to airlines maintenance staff.
                    </p>
                    <p>
                        This website has a sample of my trips as follows:
                    </p>
                    <li>
                        a world map that indicates the countries that I met and added some informations with random pictures (as sample) for each country;
                    </li>
                    <li>
                        a simple photo gallery that contains all pictures that are used in the info card of world tour map.
                    </li>
                    <img className="home-img" src={home} alt="indonesia" width='350px'/>
                </Main>
            </>
        )
    }
}