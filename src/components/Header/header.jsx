import React, {useContext} from "react";
import {Link} from "react-router-dom";
import Search from "../Search/search";
import "./header.css";
import Ctx from "../../Ctx";
import { ReactComponent as LogoImg } from "./img/logo.svg";
import {PlusCircle, HeartFill, Basket3} from "react-bootstrap-icons";
import {Badge} from "react-bootstrap";

export default () => {
    const {user, setUser, setModalActive, PATH, favorites, basket} = useContext(Ctx);

    const logIn = (e) => {
        e.preventDefault();
        setModalActive(prev => !prev);
    }
    const logOut = (e) => {
        e.preventDefault();
        localStorage.removeItem("user8");
        setUser("");
    }
    return <header>
        <Link className="logo" to={PATH}>
            <LogoImg/></Link>
        <Search/>
        <nav className="menu">
            {user && <Link to={PATH + "add"}><PlusCircle style={{fontSize: "20px"}}/></Link>}
            {user && <Link to={PATH + "favorites"} className="badge-link">
                <HeartFill style={{fontSize: "20px"}}/>
                <Badge bg="light" text="dark">{favorites.length}</Badge>
            </Link>}
            {user && <Link to={PATH + "basket"} className="badge-link">
                <Basket3 style={{fontSize: "20px"}}/>
                <Badge bg="light" text="dark">{basket.reduce((acc, el) => 
                    acc + el.cnt, 0)}</Badge>
            </Link>}
            {user && user.name && <Link to={PATH + "profile"}>{user.name}</Link>}
            {!user && <a href="" onClick={logIn}>Войти</a>}
            {/* {user && <a href="" onClick={logOut}>Выйти</a>} */}
        </nav>
    </header>
}