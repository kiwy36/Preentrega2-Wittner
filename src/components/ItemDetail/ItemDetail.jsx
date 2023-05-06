import React from "react";
import "./ItemDetail.css"
import { NavLink } from "react-router-dom";

const ItemDetail = ({ product }) => {
    return (
        <div className="container itemDetail">
            <div className="row">
                <div className="col-md-6">
                    <img src={product.image} alt={product.name} />
                </div>
                <div className="col-md-6">
                    <h1>{product.name}</h1>
                    <p>{product.description}</p>
                    <p>Precio: ${product.precio} kiwy pesos</p>
                    <p>Stock: {product.stock} en disposicion</p>
                    <button className="btn">
                        <NavLink className="btnc" to="/">Volver al inicio</NavLink>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ItemDetail;














/*
import React from "react";
export const ItemDetail = ({product})=>{
    return(
        <>
        <div className="container">
            <div className="detail">
                <img id="image" className="detail_image" src={product.image}/>
                <div className="content">
                    <h1>{product.name}</h1>
                    <h1>cuesta {product.precio} kiwy pesos</h1>
                </div>
            </div>
        </div>
        </>
    );
}

export default ItemDetail;
*/