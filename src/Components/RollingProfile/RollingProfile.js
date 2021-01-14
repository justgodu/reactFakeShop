import "./RollingProfile.css"

import Wheel from "../../car_wheel.png";
import React, {Component} from "react";
export default class RollingProfile extends Component{

    constructor(props) {
        super(props);
        this.state = { cursorX: 0, cursorY: 0, move: false};
        this.updateMouseDimensions = this.updateMouseDimensions.bind(this);


    }
    componentDidMount() {
        setTimeout(()=>{
            this.updateMouseDimensions();
            window.addEventListener('mousemove', this.updateMouseDimensions, true);
            this.setState({move: true});
        }, 5000)

    }

    componentWillUnmount() {
        window.removeEventListener('mousemove', this.updateMouseDimensions, true);
    }
    async updateMouseDimensions(ev) {
        // console.log(JSON.stringify(ev))
        const event = await ev;
        // console.log(event);
        if(typeof event !== 'undefined')
            this.setState({ cursorX: event.clientX - 50, cursorY: event.clientY - 75});
    }

    render()
    {
        return (
            <div className={this.props.move ? "profile-container move": "profile-container"} style={this.props.move ? {position: "absolute", top: this.state.cursorY}: {}}>
                <img className="profile-img" src={this.props.img}/>
                <h3>Nika Goduadze</h3>
                <div className="wheels">
                    <img className="wheel-img" style={this.props.move ? {animationName: "wheel"}: {}} src={this.props.move ? Wheel : ""}/>
                    <img className="wheel-img" style={this.props.move ? {animationName: "wheel"}: {}} src={this.props.move ? Wheel : ""}/>
                </div>
            </div>
        )
    }
}