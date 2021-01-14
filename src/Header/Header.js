import {Component} from "react";
import {Link} from "react-router-dom";
import './Header.css';

export default class Header extends Component{
    constructor(props) {
        super(props);

    }

    render(){
        return(
            <header>
                <nav>
                    <ul className="routes">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to={"/shop"}>Shop</Link></li>
                        <li><Link to={"/aboutme"}>About Me</Link></li>
                    </ul>
                </nav>
                <div onClick={()=>(this.props.changeTheme())}>change theme</div>
            </header>
        )
    }

}



