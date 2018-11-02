import React, {Component} from "react";
import NavSideBar from "../Nav"
import FeedListItem from "./FeedListItem.js";
import FeedList from "./FeedList.js";
import "./EventFeedPage.css";
import MyEvent from '../MyEvents/MyEvent';
import Footer from '../Nav/Footer';
import API from "../../utils/API";

class EventFeedPage extends Component {
    state = {
        show: false,
        profile: {},
        events: []  
    }

    componentDidMount() {
        API.getEvents().then(event =>{
                this.setState({ events: event.data });
        });

        API.getUserData()
            .then(profile =>{
                this.setState({ profile: profile.data });
            }).catch(err => console.log(err));
    }

    showToggle =() => {
        if(this.state.show) {
            this.setState({show:false})
        } else {
            this.setState({show:true})
        }
    }
    
    render () {
        return (
            
            <div>

        <div>
        <NavSideBar 
            toggle={this.showToggle}/>
        </div>
        <div>
        <div className = "content">
            <div className= "blank "></div>
            <h2>Event Feed</h2>
            <FeedList>
            {this.state.events.map( event => {
                    return (
                        this.formatDate,
                      <FeedListItem
                        key={event.name}
                        name={event.name}
                        synopsis={event.synopsis}
                        date={event.date}
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
    


export default EventFeedPage;