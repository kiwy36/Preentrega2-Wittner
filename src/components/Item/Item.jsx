import React, {useState} from "react";
import BotonContador from "../BotonContador/BotonContador";
import { NavLink } from "react-router-dom";
import './Item.css'

const Item = ({ product }) => {
    return (
        <div className="cardItem">
            <ul>
                <img src={product.image} alt={product.name} />
                <li><h1>{product.name}</h1></li>
                <li><BotonContador/></li>
                <li>
                    <button className="btn-detalles">
                        <NavLink to={`/item/${product.id}`} style={{ textDecoration: 'none' }}> <p>Detalles</p></NavLink>
                    </button>
                </li>
            </ul>
        </div>
    );
};

export default Item;
