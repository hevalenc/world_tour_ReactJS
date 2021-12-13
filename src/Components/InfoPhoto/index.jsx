import React from "react";
import na from "./Images/not_available.jpg";
import styled from 'styled-components';

export const Card = styled.div`
   .info-image{
       max-height: 270px;
       max-width: 370px;
   }
`

export default function InfoPhoto (props) {

    const i = Math.floor(Math.random() * 4)
    
    const photoCard = props.picture.map((p) => 
        <Card>
            <div key={p.id}>
                <img src={p.picture[i]} alt="" className="info-image"/>
            </div>
        </Card>
    )

    const notAvailable = <img src={na} alt="" height="250px"/>

    return (
        <div>
            {props.picture.length === 0 ? notAvailable : photoCard}
        </div>
    )
}
