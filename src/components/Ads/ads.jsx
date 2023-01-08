import React from "react";
import "./ads.css";
import pic from "./img/dogs.png";

export default () => {
    return <div className="promo">
        Собаки — удивительные существа. Они любят нас без условий. 
        Собаки подают нам пример, как надо жить.
        (Гилда Раднер)
        <img src={pic} alt="Собачки"/>
    </div>
}
