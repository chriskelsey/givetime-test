import React from "react";
import "./Feed.css";
import "../Button/Button-2.css";

const FeedListItem = props => (
    <div className = "callout clearfix horizontal-center">
        <h5>
            {props.name}
            <a href='/eventsignup' className="button radius float-right eventBtn">Sign Up</a>
        </h5>
        <h6>{props.date}</h6>
        <p className="feed">
            {props.synopsis}
        </p>
    </div>
);

export default FeedListItem;