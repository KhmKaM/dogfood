import React from "react";
import "./index.css";

export default ({text, like, price, pictures, weight}) => {
    return (<div className="card">
        <span className="card__heart">
            {
                like
                ? <i className="fa-solid fa-heart"></i>
                : <i className="fa-regular fa-heart"></i>
            }
        </span>
        <div className="card__pic">
            <img src={pictures}/>
        </div>
        <div className="card__price">{price} руб</div>
        <div className="card__weight">{weight}</div>
        <h3>{text}</h3>
    </div>)
}