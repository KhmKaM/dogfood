import React, {useState} from "react";
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
        <a className="logo" href="">
            <LogoImg/></a>
        <Search data={products}/>
        <nav className="menu">
            {user && <a href="">{user}</a>}
            {!user && <a href="" onClick={logIn}>Войти</a>}
            {user && <a href="" onClick={logOut}>Выйти</a>}
        </nav>
    </header>
}