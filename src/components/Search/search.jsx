import React, {useState} from "react";
import "./search.css";
import {ReactComponent as SearchImg} from "./img/magnifying-glass-solid.svg";
import {ReactComponent as CloseImg} from "./img/circle-xmark-regular.svg";

export default () => {
    const [text, updateText] = useState("");
    return <div className="search-block">
        <input/>
        <button>{text ? <CloseImg/> : <SearchImg/>}</button>
    </div>
}