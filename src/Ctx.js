import React from "react";

export default React.createContext({
    user: {},
    token: "",
    api: {},
    modalActive: false,
    goods: [],
    visibleGoods: [],
    setModalActive: () => {},
    setVisibleGoods: () => {},
    setGoods: () => {},
    setUser: () => {},
    setToken: () => {},
    setApi: () => {},
    favorites: [],
    setFavorites: () => {},
    basket: [],
    setBasket: () => {}
});