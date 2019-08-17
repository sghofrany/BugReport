import React from 'react';
import UserImage from '../img/user.jpg';
import '../css/BugComponent.css';

function BugComponent(props) {

    return (
        <div className="bug">
            
            <div className="title-wrapper">
                <p className="title"  onClick={props.clickBug}>{props.title}</p>
            </div>
            

            <div className="status-wrapper">
                <p className={props.status === "solved" ? "status-solved" : "status-pending"}>{props.status}</p>
            </div>
            
        </div>
    )

}


export default BugComponent;
