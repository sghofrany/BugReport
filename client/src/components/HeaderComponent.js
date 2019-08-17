import React from 'react';
import '../css/FrontPage.css';

class HeaderComponent extends React.Component {

    constructor() {

        super();

        this.state = {
            loggedIn: true,
            username: undefined
        }
    }

    render() {
        return (
            <div className="header">
                <ul>
                    <li>Home</li>
                    <li>Support</li>
                    <li>FAQ</li>
                    <li>FAQ</li>
                </ul>
            </div>
        )
    }

}

export default HeaderComponent;