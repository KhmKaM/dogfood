import React, {useState, useEffect} from "react";
import {Routes, Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
//  import products from "./assets/data.json";

import Header from "./components/Header/header";
import Footer from "./components/Footer/footer";
import Modal from "./components/Modal"

import Home from "./pages/Home.jsx";
import Catalog from "./pages/Catalog.jsx";
import Profile from "./pages/Profile";
import Product from "./pages/Product";
import AddForm from "./pages/AddForm";
import Favorites from "./pages/Favorites";
// import Fake from "./pages/Fake";
import Basket from "./pages/Basket";
import dataLocal from "./assets/data.json";
import {Api} from "./Api";
import Ctx from "./Ctx";

const PATH = "/";
//const PATH = "/dogfood/"; //githubpages
const dataHome = [];
for (let i=0; i < 6;) {
    let j = Math.floor(Math.random() * 16);
    if(!dataHome.includes(dataLocal[j])) {
        dataHome.push(dataLocal[j]);
        i++;
    }
}
// const smiles = [<span>^_^</span>, "=)", "O_o", ";(", "^_0", "@_@", "–_–"];

const App = () => {
    let usr = localStorage.getItem("user8");
    if (usr) {
       usr = JSON.parse(usr);
    }
    const [user, setUser] = useState(usr);
    const [token, setToken] = useState(localStorage.getItem("token8"));
    const [modalActive, setModalActive] = useState(false);
    const [api, setApi] = useState(new Api(token));
    const [goods, setGoods] = useState([]);
    const [authors, setAuthors] = useState([]);
    const [visibleGoods, setVisibleGoods] = useState(goods);
    const [favorites, setFavorites] = useState([]);
    const [basket, setBasket] = useState(localStorage.getItem("basket8") 
            ? JSON.parse(localStorage.getItem("basket8")) : []);

    useEffect(() => {
        if (token) {
            api.getProducts()
            .then(res => res.json())
            .then(data => {
                setGoods(data.products);
            })
            api.getUsers()
            .then(res => res.json())
            .then(data => {
                console.log("af-af", data);
                setAuthors(data);
            })
        }
    }, [])

    useEffect(() => {
        setApi(new Api(token));
        let usr = localStorage.getItem("user8");
        if (usr) {
            usr = JSON.parse(usr);
        }
        setUser(usr);
    }, [token])

    useEffect(() => {
        if (!user) {
            localStorage.removeItem("token8");
            setToken(null);
        }
    }, [user])

    useEffect(() => {
        if (token) {
            api.getProducts()
            .then(res => res.json())
            .then(data => {
                setVisibleGoods(data.products);
                setGoods(data.products);
            })
        }
    }, [api])

    useEffect(() => {
        setFavorites(goods.filter(el => {
            // Найти только те товары, в которых свойство likes ([]) включает в себя id моего пользователя
            return el.likes && el.likes.includes(user._id);
        }))
    }, [goods])

    useEffect(() => {
        localStorage.setItem("basket8", JSON.stringify(basket));
    }, [basket]);

    return (
        <Ctx.Provider value={{
            user: user,
            token: token,
            api: api,
            modalActive: modalActive,
            goods: goods,
            visibleGoods: visibleGoods,
            favorites: favorites,
            setUser: setUser,
            setToken: setToken,
            setApi: setApi,
            setModalActive: setModalActive,
            setGoods: setGoods,
            setVisibleGoods: setVisibleGoods,
            setFavorites: setFavorites,
            PATH: PATH,
            basket,
            setBasket,
            authors
        }}>
            <div className="wrapper">
                <Header/>
                <main>
                    {/* {user ? <Catalog data={goods}/> : <Home data={smiles}/>} */}
                    <Routes>
                        <Route path={PATH} element={<Home data={dataHome}/>}/>
                        <Route path={PATH + "catalog"} element={<Catalog/>}/>
                        <Route path={PATH + "profile"} element={<Profile/>}/>
                        <Route path={PATH + "catalog/:id"} element={<Product/>}/>
                        <Route path={PATH + "add"} element={<AddForm/>}/>
                        <Route path={PATH + "favorites"} element={<Favorites/>}/>
                        {/* <Route path={PATH + "fake/:n/:title"} element={<Fake/>}/> */}
                        <Route path={PATH + "basket"} element={<Basket/>}/>
                    </Routes>
                    {/* <ul>
                        {smiles.map((el, i) => <li key={el}>
                            <Link to={`${PATH}fake/${i+1}/${el}`}>{el}</Link>
                        </li>)}
                    </ul> */}
                </main>
                <Footer/>
            </div>
            <Modal/>
        </Ctx.Provider>
    )
}

export default App;