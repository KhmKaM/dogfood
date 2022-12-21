import React, {useState} from "react";
import {Link} from "react-router-dom";
import Search from "../Search/search";
import "./header.css";
import { ReactComponent as LogoImg } from "./img/logo.svg";

export default ({user, setUser, products, setModalActive}) => {
    const logIn = (e) => {
        e.preventDefault();
        setModalActive(prev => !prev); //обращение к предыдущему состоянию
    }
    const logOut = (e) => {
        e.preventDefault();
        localStorage.removeItem("user8");
        setUser("");
    }
    return <header>
        <Link className="logo" to="/">
            <LogoImg/></Link>
        <Search data={products}/>
        <nav className="menu">
            {user && <Link to="/profile">{user}</Link>}
            {!user && <a href="" onClick={logIn}>Войти</a>}
            {user && <a href="" onClick={logOut}>Выйти</a>}
        </nav>
    </header>
}