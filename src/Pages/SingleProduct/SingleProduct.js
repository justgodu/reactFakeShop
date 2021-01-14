import React, {useEffect, useState} from "react";
import {useParams, Link} from "react-router-dom";
import './SingleProduct.css';
import Preloder from "../../Components/Spinner/Preloder";

export default function SingleProduct(props) {

    const [product, setProduct] = useState(0    )
    const {id} = useParams()

    useEffect(() => {
        console.log(id)
        fetch("https://fakestoreapi.com/products/" + id)
            .then((response) => response.json())
            .then((myproduct) => setProduct(myproduct))
    }, []);


    if (product !== 0) {
        return (

            <div>
                <h1 className="single-product-title">{product.title}</h1>
                <img className="single-product-img" src={product.image}/>
                <p className="single-product-description">{product.description}</p>
                <h3 className="single-product-price">Price: {product.price}</h3>
                <Link to={"/checkout/"+ product.id}>
                    <button>Proceed To Checkout</button>
                </Link>
            </div>
        )

    } else
        return (
            <Preloder/>
        )
}