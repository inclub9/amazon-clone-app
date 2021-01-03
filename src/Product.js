import React from "react";
import "./Product.css"

function Product({id, title, image, price, ratting}) {
    return (
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__ratting">
                    {
                        Array(ratting)
                            .fill()
                            .map((_) => (
                                <p>*</p>
                            ))
                    }
                </div>
            </div>
            <img src={image} alt=""/>
            <button>Add to Basket</button>
        </div>
    );
}

export default Product;