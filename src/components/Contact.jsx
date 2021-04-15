import React, {Component} from "react";

class Contact extends Component {
    render() {
        return (
            <article>
                <div className='infoContact'>
                    <p>{this.props.contact.firstName} {this.props.contact.lastName}</p>
                    <p>{this.props.contact.gender ===undefined? this.props.contact.gender = 'anon': this.props.contact.gender}</p>
                </div>
                <p>{this.props.contact.phone}</p>
            </article>
        )
    }
}

export default Contact;