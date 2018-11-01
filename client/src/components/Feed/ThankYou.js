import React, {Component} from "react";
import NavSideBar from "../Nav"
import "./EventFeedPage.css";
import MyEvent from '../MyEvents/MyEvent';
import Footer from '../Nav/Footer';
import API from "../../utils/API";
import { Link } from "react-router-dom";

class ThankYou extends Component {
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
            <div style={{height: "150px"}}></div>
            <h1 style = {{color: 'black', marginLeft:"100px"}}> Thank you! </h1>
            
            <div className = "text-center">

                <Link to ="/eventfeed" style ={{marginLeft: "90px"}}  className="button radius">See more events</Link>

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
    


export default ThankYou;