import React, {Component} from "react";
import "./Aboutme.css"
import ProfilePic from "../../profile-pic.jpg";
import RollingProfile from "../../Components/RollingProfile/RollingProfile";
import StopMovingButton from "../../Components/StopMovingButton";

export default class AboutMe extends Component {
    constructor(props) {
        super(props);
        this.state = {
            move: false
        }
        this.toggleCar = this.toggleCar.bind(this)
    }

    toggleCar(){
        this.setState({move: !this.state.move})
    }

    render() {
        return (
                <div className="about-me-page">

                    <div style={{height: "300px"}}>
                        <RollingProfile img={ProfilePic} move={this.state.move}/>
                    </div>
                    <div className="about-me-container">
                        <StopMovingButton stop={this.toggleCar} isStopped={!this.state.move}/>
                        <h1>About me</h1>

                        <h2>Slogan: </h2>
                        <p>საიტებს ვწერ და ჭერში ვაწყობ</p>

                        <h2>Experience</h2>
                        <ul>
                            <li>
                                C++ <div className="cplusplus"></div>
                            </li>
                            <li>
                                PHP <div className="php"></div>
                            </li>
                            <li>
                                GOOGLE <div className="google"></div>
                            </li>
                            <li>
                                STACKOVERFLOW <div className="stackoverflow"></div>
                            </li>
                        </ul>

                    </div>

                </div>

            )

    }
}