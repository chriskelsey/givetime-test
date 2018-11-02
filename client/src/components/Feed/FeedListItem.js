import React from "react";
import { Link } from "react-router-dom";
import "./Feed.css";
import "../Button/Button-2.css";

const FeedListItem = props => (
    <div className = "callout clearfix horizontal-center">
        <h5>
            {props.name}
            <Link to ="/eventsignup"className="button radius float-right ">Sign Up</Link>
        </h5>
        <h6>{props.date}</h6>
        <p className="feed">
            {props.synopsis}
        </p>
    </div>
);

export default FeedListItem;