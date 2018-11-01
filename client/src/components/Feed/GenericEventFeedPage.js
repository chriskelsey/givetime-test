import React, {Component} from "react";
import FeedListItem from "./FeedListItem.js";
import FeedList from"./FeedList.js";
import { Link } from 'react-router-dom';
import "./GenericEventFeedPage.css";
import Footer from '../Nav/Footer';
import API from "../../utils/API";

class GenericEventFeedPage extends Component {
    state = {
        events: []  
    }

    componentDidMount() {
        API.getEvents().then(event =>{
                this.setState({ events: event.data });
        });
    }
    render () {
        return (
            
        <div>
        <div className="top-content-section" data-magellan data-threshold="0">
    <div className="top-bar">
        <Link to ="/" href="#hero-full-screen"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 12c0-6.627-5.373-12-12-12s-12 5.373-12 12 5.373 12 12 12 12-5.373 12-12zm-18.005-1.568l1.415-1.414 4.59 4.574 4.579-4.574 1.416 1.414-5.995 5.988-6.005-5.988z"/></svg></Link>
      <div className="top-bar-right">
        <ul className="menu">
          <li><Link to = "/signin">Sign in</Link></li>
        </ul>
      </div>
    </div>
  </div>
        <div>
        <div className = "anon-content content">
            <div className= "blank "></div>
            <h2>Latest Events</h2>
            <FeedList>
            {this.state.events.map( event => {
                    return (
                      <FeedListItem
                        key={event.name}
                        name={event.name}
                        synopsis={event.synopsis}
                        //ingredients={recipe.ingredients}
                      />
                    );
                  })}
            </FeedList>
        </div>
        </div>
        
        <Footer /> 
    </div>

        );
    }

}
    


export default GenericEventFeedPage;