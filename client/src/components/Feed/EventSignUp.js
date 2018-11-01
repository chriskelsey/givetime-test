import React, {Component} from "react";
import NavSideBar from "../Nav"
import "./EventFeedPage.css";
import MyEvent from '../MyEvents/MyEvent';
import Footer from '../Nav/Footer';
import API from "../../utils/API";
import { Link } from "react-router-dom";

class EventSignUp extends Component {
    state = {
        show: false,
        profile: {},
        hideContent: false
    }

    componentDidMount() {
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

    hideContent = () => {
        this.setState({hideContent:true})
    }

    render () {
        return (
            
        <div>

        <div>
        <NavSideBar
            toggle={this.showToggle}/>
        </div>

        <div className = "text-center">
            <h1 style = {{color: 'black', marginLeft:"100px", fontSize: "40px"}}> Puppy Car Wash </h1>
            <h3 style = {{color: 'black', size: '5px', marginLeft: "80px"}}> 555 Main Street, San Francisco, CA</h3>

            <div className = "text-center">
                <fieldset style={{width: "800px", marginLeft: "295px"}}className="fieldset">
                <legend>Times Available</legend>
                <input id="checkbox1" type="checkbox" /><label for="checkbox1">9:00AM</label>
                <input id="checkbox2" type="checkbox" /><label for="checkbox2">12:00PM</label>
                <input id="checkbox3" type="checkbox" /><label for="checkbox3">3:00PM</label> <br />
                <input id="checkbox1" type="checkbox" /><label for="checkbox1">10:00AM</label>
                <input id="checkbox2" type="checkbox" /><label for="checkbox2">1:00PM</label>
                <input id="checkbox3" type="checkbox" /><label for="checkbox3">4:00PM</label> <br />
                <input id="checkbox1" type="checkbox" /><label for="checkbox1">11:00AM</label>
                <input id="checkbox2" type="checkbox" /><label for="checkbox2">2:00PM</label>
                <input id="checkbox3" type="checkbox" /><label for="checkbox3">5:00PM</label> <br />
                </fieldset>
            </div>

            <div className = "text-center">

                <Link to ="/thankyou" style ={{marginLeft: "90px"}}  className="button radius">Submit</Link>

            </div>
        </div>
        
        <div>
         <MyEvent
            state={this.state.show}
            
            />
        </div>
        
        <Footer /> 
    </div>

        );
    }

}
    


export default EventSignUp;