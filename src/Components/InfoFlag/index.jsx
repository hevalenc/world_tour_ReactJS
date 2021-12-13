import React from "react";

export default function InfoFlag (props) {
    
    const flagCard = props.flag.map((f) => 
        <div key={f.id}>
            <img src={f.flag} alt="flag" width="120px" border="1px" className="flag"/>
        </div>
    )
    return (
        <div>
            {flagCard}
        </div>
    )
}
