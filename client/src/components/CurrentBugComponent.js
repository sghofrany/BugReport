import React from 'react';
import '../css/CurrentBugComponent.css';

function CurrentBugComponent(props) {
    return (
        <div className="current-bug-wrapper">

            <div className="current-bug-title-wrapper">
                <p id="title">{props.title}</p>
                <p className={props.status === "pending" ? "pending" : "solved"}>{props.status}</p>
            </div>

            <div className="hr"></div>

            <div className="body-wrapper">
                <p>{props.body}</p>
            </div>

        </div>
    )
}

export default CurrentBugComponent;