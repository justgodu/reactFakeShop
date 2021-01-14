import {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import Preloder from "../../Components/Spinner/Preloder";


export default function Category(props){

    const [products, setProduct] = useState(0)
    const {slug} = useParams()
    useEffect(() => {
        console.log(slug)
        fetch("https://fakestoreapi.com/products/category/" + slug)
            .then((response) => response.json())
            .then((myproducts) => setProduct(myproducts))
    }, []);

        if (products.length > 0) {
            return (
                <div className="row products-container">
                    {products.map((product, index) => (
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



