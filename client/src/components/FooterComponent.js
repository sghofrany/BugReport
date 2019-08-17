import React from 'react';
import '../css/FrontPage.css';

class FooterComponent extends React.Component {

    constructor() {

        super();

        this.state = {
            loggedIn: true,
            username: undefined
        }
    }

    render() {
        return (
            <div className="footer">
                <ul>
                    <li>Home</li>
                    <li>Support</li>
                    <li>FAQ</li>
                </ul>
            </div>
        )
    }

}

export default FooterComponent;