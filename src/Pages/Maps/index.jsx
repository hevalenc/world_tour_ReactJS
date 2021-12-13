import React from 'react';
import Tippy from '@tippyjs/react';
import { Component } from 'react';
import { Page, MapCard, InfoCard } from './map_styles';
import Info from '../../Components/Info';
import InfoFlag from '../../Components/InfoFlag';
import InfoPhoto from '../../Components/InfoPhoto';
import dict from "../../Components/Dictionary";
import flags from '../../Components/Flags';
import gallery from '../../Components/Gallery';
import 'tippy.js/dist/tippy.css';
import './map_styles.css';
import marker from './Images/marker.png';
import compass from './Images/compass.png';

export default class Maps extends Component {

    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this);
        this.state = { countryId: '' }
      }

    handleClick(props){
        this.setState({ countryId: props })
    }
    
    render(){

        const dictionary = dict.filter(item => { return item.id === this.state.countryId })
        const flag = flags.filter(item => { return item.id === this.state.countryId })
        const picture = gallery.filter(item => { return item.id === this.state.countryId })

        return(
            <>
                <Page>
                    <h2>WORLD TOUR</h2>
                </Page>
                <MapCard>
                    <Tippy  content='Canada'>
                        <img onClick={() => this.handleClick('canada')} src={marker} alt="" className="canada marker"/>
                    </Tippy>
                    <Tippy content='Iceland'>
                        <img onClick={() => this.handleClick('iceland')} src={marker} alt="" className="iceland marker"/>
                    </Tippy>
                    <Tippy content='United States of America'>
                        <img onClick={() => this.handleClick('usa')} src={marker} alt="" className="usa marker"/>
                    </Tippy>
                    <Tippy content='Mexico'>
                        <img onClick={() => this.handleClick('mexico')} src={marker} alt="" className="mexico marker"/>
                    </Tippy>
                    <Tippy content='Venezuela'>
                        <img onClick={() => this.handleClick('venezuela')} src={marker} alt="" className="venezuela marker"/>
                    </Tippy>
                    <Tippy content='Brazil'>
                        <img onClick={() => this.handleClick('brazil')} src={marker} alt="" className="brazil marker"/>
                    </Tippy>
                    <Tippy content='Portugal'>
                        <img onClick={() => this.handleClick('portugal')} src={marker} alt="" className="portugal marker"/>
                    </Tippy>
                    <Tippy content='Spain'>
                        <img onClick={() => this.handleClick('spain')} src={marker} alt="" className="spain marker"/>
                    </Tippy>
                    <Tippy content='France'>
                        <img onClick={() => this.handleClick('france')} src={marker} alt="" className="france marker"/>
                    </Tippy>
                    <Tippy content='Netherlands'>
                        <img onClick={() => this.handleClick('netherlands')} src={marker} alt="" className="netherlands marker"/>
                    </Tippy>
                    <Tippy content='Germany'>
                        <img onClick={() => this.handleClick('germany')} src={marker} alt="" className="germany marker"/>
                    </Tippy>
                    <Tippy content='Serbia'>
                        <img onClick={() => this.handleClick('serbia')} src={marker} alt="" className="serbia marker"/>
                    </Tippy>
                    <Tippy content='Greece'>
                        <img onClick={() => this.handleClick('greece')} src={marker} alt="" className="greece marker"/>
                    </Tippy>
                    <Tippy content='Mauritania'>
                        <img onClick={() => this.handleClick('mauritania')} src={marker} alt="" className="mauritania marker"/>
                    </Tippy>
                    <Tippy content='Botswana'>
                        <img onClick={() => this.handleClick('botswana')} src={marker} alt="" className="botswana marker"/>
                    </Tippy>
                    <Tippy content='South Africa'>
                        <img onClick={() => this.handleClick('southafrica')} src={marker} alt="" className="southafrica marker"/>
                    </Tippy>
                    <Tippy content='Azerbaijan'>
                        <img onClick={() => this.handleClick('azerbaijan')} src={marker} alt="" className="azerbaijan marker"/>
                    </Tippy>
                    <Tippy content='Saudi Arabia'>
                        <img onClick={() => this.handleClick('saudiarabia')} src={marker} alt="" className="saudiarabia marker"/>
                    </Tippy>
                    <Tippy content='Russia'>
                        <img onClick={() => this.handleClick('russia')} src={marker} alt="" className="russia marker"/>
                    </Tippy>
                    <Tippy content='China'>
                        <img onClick={() => this.handleClick('china')} src={marker} alt="" className="china marker"/>
                    </Tippy>
                    <Tippy content='Myanmar'>
                        <img onClick={() => this.handleClick('myanmar')} src={marker} alt="" className="myanmar marker"/>
                    </Tippy>
                    <Tippy content='Indonesia'>
                        <img onClick={() => this.handleClick('indonesia')} src={marker} alt="" className="indonesia marker"/>
                    </Tippy>
                    <Tippy content='Australia'>
                        <img onClick={() => this.handleClick('australia')} src={marker} alt="" className="australia marker"/>
                    </Tippy>
                    <button className='info-button' onClick={() => this.handleClick('')}>Clear Info Card</button>
                </MapCard>
                <InfoCard>
                    <h2 className='header'>INFO CARD</h2>
                    {this.state.countryId === '' &&
                        <>
                            <img src={compass} alt='' className='compass' />
                            <p className='text'>The Information about each marker will be shown here. One random picture will be shown at bottom.</p>
                        </>
                    }
                    <InfoFlag flag={flag} className="flag"/>
                    <Info dictionary={dictionary} />
                    {this.state.countryId !== '' &&
                        <InfoPhoto picture={picture} />
                    }
                </InfoCard>
            </>
        )
    }
}
