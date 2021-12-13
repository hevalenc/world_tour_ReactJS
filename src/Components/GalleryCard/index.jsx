import React , { useState } from "react";
import Modal from "../Modal";
import "./card.css";
import '../Modal/modal.css';

export default function Card (props) {

    const [showModal, setShowModal] = useState(false)
    const [source, setSource] = useState(0)

    const imageCard = props.picture.map((p) =>
        <div key={p.id} className="row">
            <div className="card-image">
                <img src={p.picture[0]} alt="" className="image" onClick={() => {setShowModal (value => !value); setSource (0)}}/>
            </div>
            <div className="card-image">
                <img src={p.picture[1]} alt="" className="image" onClick={() => {setShowModal (value => !value); setSource (1)}}/>
            </div>
            <div className="card-image">
                <img src={p.picture[2]} alt="" className="image" onClick={() => {setShowModal (value => !value); setSource (2)}}/>
            </div>
            <div className="card-image">
                <img src={p.picture[3]} alt="" className="image" onClick={() => {setShowModal (value => !value); setSource (3)}}/>
            </div>
            <Modal show={showModal} handleClose={() => setShowModal (value => !value)}>
                <img src={p.picture[source]} alt="" className="modal-image"/>
            </Modal>
        </div>
    )

    return (
        <div className="container">
            {imageCard}
        </div>
    )
}
