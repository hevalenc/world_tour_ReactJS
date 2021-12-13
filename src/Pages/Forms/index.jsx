import React from "react";
import { Component } from "react";
import { Form, Page } from "./forms";
import mailbox from './Images/mailbox.png';
import linkedin from './Images/linkedin.png';
import github from './Images/github.png';

const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
}

export default class ContactForms extends Component{

    constructor(props) {
        super(props)
        this.state = { fullname: '', email: '', comments: '' }
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    
    handleInputChange(event) {
        const target = event.target
        const value = target.value
        const name = target.name

        this.setState({ [name]: value })
    }

    handleSubmit(event) {
        event.preventDefault()
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ "form-name": "contact", ...this.state })
        })
        .then(() => alert('Thanks for comments!!'))
        .catch(error => alert(error));
        this.setState({ fullname: '', email: '', comments: '' })
    }

    render(){
        return(
            <>
                <Page>
                    <h2>CONTACT</h2>
                </Page>
                <Form>
                    <p>Feel free to let your comments about this website or tips to improve some functionality.</p>
                    <form onSubmit={this.handleSubmit}>
                        <div className="forms-container">
                            <label>Full Name : </label>
                            <input type="text" name="fullname" 
                                placeholder="Ex: Heitor Valenca" required="required" size="35" 
                                value={this.state.fullname} onChange={this.handleInputChange}/>
                        </div>

                        <div className="forms-container">
                            <label>Email : </label>
                            <input type="email" name="email" 
                                placeholder="Ex: name@example.com" required="required" size="40" 
                                value={this.state.email} onChange={this.handleInputChange}/>
                        </div>

                        <div className="forms-container">
                            <label>Comments : </label>
                        </div>
                        <div className="forms-container">
                            <textarea name="comments" rows="5" required="required" cols="47" wrap="off" 
                                value={this.state.comments} onChange={this.handleInputChange}/>
                        </div>
                        <button type="submit">Submit</button>
                    </form>

                    <img className="forms-img" src={mailbox} alt="" width="300px"/>
                    <p>Visit my GitHub to see the source code of this website and other projects.</p>
                    <a className="social" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/heitor-v-08ab7544/"><img src={linkedin} alt="" width="40px"/></a>
                    <a className="social" target="_blank" rel="noreferrer" href="https://github.com/hevalenc?tab=repositories"><img src={github} alt="" width="40px"/></a>
                    <p>Or be in touch via Email : <span className="email">heitorvalenca7@gmail.com</span></p>
                </Form>
            </>
        )
    }
}