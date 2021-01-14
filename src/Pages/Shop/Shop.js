import {Component} from "react";
import {Link} from "react-router-dom";
import Preloder from "../../Components/Spinner/Preloder";
import './Shop.css';

export default class Shop extends Component {
    constructor(props) {
        super(props);
        this.state = {products: []}
    }

    componentDidMount() {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => {
                this.setState({products: json})
            })

    }

    render() {
        if (this.state.products.length > 0) {
            return (
                <div className="row products-container">
                    {this.state.products.map((product, index) => (
                        <div className={"column"} key={index}>
                            <Link to={"/product/" + product.id}>
                            <div className={"product-card"}>
                                <h4 className="product-title">{product.title}</h4>
                                <div className="product-image-container">
                                    <img className="product-image" src={product.image} alt={product.title}/>
                                </div>
                                <span className="product-category">{product.category}</span>
                                <p className="product-price">{product.price}</p>
                            </div>
                            </Link>
                        </div>
                    ))}

                </div>
            )
        } else {
            return (
                <Preloder/>
            )
        }
    }

}



