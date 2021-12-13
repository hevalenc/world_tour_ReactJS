import React, { Component } from "react";
import Card from "../../Components/GalleryCard";
import gallery from "../../Components/Gallery";
import dict from "../../Components/Dictionary";
import "./gallery.css";

export default class Gallery extends Component{

    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this);
        this.state = { countryId: '' }
      }

    handleClick(props){
        this.setState({ countryId: props })
    }

    render(){

        const picture = gallery.filter(item => { return item.id === this.state.countryId })

        const dictionary = dict.filter(item => { return item.id === this.state.countryId })
        
        const title = dictionary.map((word) => 
            <div key={word.id}>
                <h2>Country : {word.country}</h2>
            </div>
        )

        return (
            <>
                <div className="page-gallery">
                    <h2>GALLERY</h2>
                </div>
                <div className="navbar">
                    <div className="nav">
                        <h4>South America</h4>
                        <li className="item" onClick={() => this.handleClick('brazil')}>Brazil</li>
                        <li className="item" onClick={() => this.handleClick('venezuela')}>Venezuela</li>
                    </div>
                    <div className="nav">
                        <h4>North America</h4>
                        <li className="item" onClick={() => this.handleClick('canada')}>Canada</li>
                        <li className="item" onClick={() => this.handleClick('mexico')}>Mexico</li>
                        <li className="item" onClick={() => this.handleClick('usa')}>United States</li>
                    </div>
                    <div className="nav">
                        <h4>Europe</h4>
                        <li className="item" onClick={() => this.handleClick('france')}>France</li>
                        <li style={{color:'red'}} onClick={() => this.handleClick('germany')}>Germany</li>
                        <li className="item" onClick={() => this.handleClick('greece')}>Greece</li>
                        <li className="item" onClick={() => this.handleClick('iceland')}>Iceland</li>
                        <li className="item" onClick={() => this.handleClick('netherlands')}>Netherlands</li>
                        <li className="item" onClick={() => this.handleClick('portugal')}>Portugal</li>
                        <li className="item" onClick={() => this.handleClick('russia')}>Russia</li>
                        <li className="item" onClick={() => this.handleClick('serbia')}>Serbia</li>
                        <li className="item" onClick={() => this.handleClick('spain')}>Spain</li>
                    </div>
                    <div className="nav">
                        <h4>Africa</h4>
                        <li className="item" onClick={() => this.handleClick('botswana')}>Botswana</li>
                        <li className="item" onClick={() => this.handleClick('mauritania')}>Mauritania</li>
                        <li className="item" onClick={() => this.handleClick('southafrica')}>South Africa</li>
                    </div>
                    <div className="nav">
                        <h4>Middle East</h4>
                        <li className="item" onClick={() => this.handleClick('saudiarabia')}>Saudi Arabia</li>
                    </div>
                    <div className="nav">
                        <h4>Asia</h4>
                        <li className="item" onClick={() => this.handleClick('azerbaijan')}>Azerbaijan</li>
                        <li className="item" onClick={() => this.handleClick('china')}>China</li>
                        <li className="item" onClick={() => this.handleClick('indonesia')}>Indonesia</li>
                        <li style={{color:'red'}} onClick={() => this.handleClick('myanmar')}>Myanmar</li>
                    </div>
                    <div className="nav">
                        <h4>Oceania</h4>
                        <li className="item" onClick={() => this.handleClick('australia')}>Australia</li>
                    </div>
                </div>
                <div className="gallery-card">
                    {title}
                    <Card picture={picture}/>
                </div>
            </>
        )
    }
}