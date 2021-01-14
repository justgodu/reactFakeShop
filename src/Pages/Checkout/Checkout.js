import React, {Component} from "react";
import {Link, withRouter} from "react-router-dom";

import Preloder from "../../Components/Spinner/Preloder";
import "./Checkout.css";

class Checkout extends Component {

    constructor(props) {
        super(props);

        this.state = {
            product: 0,
            fname: "",
            email: "",
            cardname: "",
            cardnumber: "",
            expmonth: "",
            expyear: 2024,
            cvv: "",
            isSameBilling: true,
            errors: []

        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    componentDidMount() {
        const id = this.props.match.params.id;
        console.log(id)
        fetch("https://fakestoreapi.com/products/" + id)
            .then((response) => response.json())
            .then((myproduct) => this.setState({product: myproduct}))
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        let errors = []
        console.log(/[a-zA-Z]/.test(this.state.fname))
        if(!/^[a-zA-Z]/.test(this.state.fname) || this.state.fname.length < 2){
            errors.push("Full name should only contain at least 2 letters : " + this.state.fname)
        }
        if(!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(this.state.email) || this.state.email.length < 5){
            errors.push("Email should be valid and should contain at least 5 characters: " + this.state.email)
        }
        if(!/^[a-zA-Z]/.test(this.state.cardname) || this.state.cardname.length < 4){
            errors.push("Card name should only contain at least 4 letters : " + this.state.cardname)
        }
        if(!/^\d+$/.test(this.state.cardnumber) || this.state.cardnumber.length === 16){
            errors.push("Card number should only contain at least 16 number : " + this.state.cardnumber)
        }

        if(errors.length > 0){
            this.setState({errors: errors});
        }else{
            alert("success");
            this.props.history.push("/");
        }

        event.preventDefault();
    }
    render() {
        if (this.state.product) {
            return (
                <div className="row-c">
                    <div className="col-75">
                        <div className="container">
                            <form onSubmit={this.handleSubmit}>

                                <div className="row">
                                    <div className="col-50">
                                        <h3>Billing Address</h3>
                                        <label htmlFor="fname"><i className="fa fa-user"></i> Full Name</label>
                                        <input type="text" name="fname" value={this.state.fname}
                                               placeholder="First Name" onChange={this.handleInputChange}/>
                                        <label htmlFor="email"><i className="fa fa-envelope"></i> Email</label>
                                        <input type="text" name="email" value={this.state.email} placeholder="john@example.com"
                                               onChange={this.handleInputChange}/>
                                    </div>

                                    <div className="col-50">
                                        <h3>Payment</h3>

                                        <label htmlFor="cardname">Name on Card</label>
                                        <input type="text" name="cardname" value={this.state.cardname} placeholder="Card name"
                                               onChange={this.handleInputChange}/>
                                        <label htmlFor="cardnumber">Credit card number</label>
                                        <input type="text" name="cardnumber" value={this.state.cardnumber}
                                               placeholder="1111-2222-3333-4444" onChange={this.handleInputChange}/>
                                        <label htmlFor="expmonth">Exp Month</label>
                                        <input type="text" name="expmonth" value={this.state.expmonth} placeholder="Seqtember"
                                               onChange={this.handleInputChange}/>
                                        <div className="row">
                                            <div className="col-50">
                                                <label htmlFor="expyear">Exp Year</label>
                                                <input type="number" name="expyear" value={this.state.expyear}
                                                       onChange={this.handleInputChange}/>
                                            </div>
                                            <div className="col-50">
                                                <label htmlFor="cvv">CVV</label>
                                                <input type="text" name="cvv" value={this.state.cvv} placeholder="123"
                                                       onChange={this.handleInputChange}/>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <label>
                                    <input type="checkbox" name="isSameBilling" checked={this.state.isSameBilling}
                                           onChange={this.handleInputChange}/> Shipping address same as
                                    billing
                                </label>
                                <ul>
                                    {this.state.errors.map((error,index)=> (
                                        <li key={index}>{error}</li>
                                    ))}
                                </ul>
                                <button className="btn">Continue to checkout</button>
                            </form>
                        </div>
                    </div>
                    <div className="col-25">
                        <div className="container">
                            <h4>Product <span className="price" style={{color: "black"}} /></h4>
                            <h1 className="single-product-title">{this.state.product.title}</h1>
                            <img className="single-product-img" src={this.state.product.image}/>
                            <p className="single-product-description">{this.state.product.description}</p>
                            <p>Total <span className="price" style={{color: "black"}}><b>{this.state.product.price}</b></span></p>
                        </div>
                    </div>
                </div>
            )

        } else
            return (
                <Preloder/>
            )
    }
}
export default withRouter(Checkout);