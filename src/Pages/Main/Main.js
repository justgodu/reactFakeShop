import React, {Component} from "react";
import {Link} from "react-router-dom";
import './Main.css';
import Preloder from "../../Components/Spinner/Preloder";
import Carousel from 'react-elastic-carousel';

export default class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {products: []}
    }

    componentDidMount() {
        Promise.all([fetch('https://fakestoreapi.com/products').then(res => res.json()),
            fetch('https://fakestoreapi.com/products/categories').then(res => res.json())])
            .then(([products, categories]) => this.setState({products: products, categories: categories}))


    }

    render() {
        if (this.state.products.length > 0 && this.state.categories.length) {
            return (
                <div>
                    <Carousel itemsToScroll={3} itemsToShow={3} key={1}>
                        {this.state.products.map((product, index) =>(
                            <div key={index}>
                            <Link to={"/product/" + product.id}>
                            <div className="carousel-item">
                                <h4 className="product-title">{product.title}</h4>
                                <div className="carousel-product-image-container">
                                    <img className="carousel-product-image" src={product.image} alt={product.title}/>
                                </div>
                                <span className="product-category">{product.category}</span>
                                <p className="product-price">{product.price}</p>
                            </div>
                            </Link>
                            </div>
                        ))}
                    </Carousel>

                    <Carousel itemsToScroll={3} itemsToShow={3} key={2}>
                        {this.state.categories.map((category, index) =>(
                            <Link to={"/category/" + category} key={index}>
                            <h3 key={index}>{category}</h3>
                            </Link>
                        ))}
                    </Carousel>
                </div>
            )
        } else
            return (
                <Preloder/>
            )
    }
}