import React, {useContext, useState, useEffect} from "react";
import Card from "../components/Card";
import {Link} from "react-router-dom";
import {EmojiFrown, SortNumericDown, SortNumericUp, BagCheck} from "react-bootstrap-icons";
import Ctx from "../Ctx";
import "./pages.css";
import usePagination from "../hooks/usePagination";
import Pagination from "../components/Pagination";

export default () => {
    const {visibleGoods, user, PATH} = useContext(Ctx);
    const [sortGoods, setSortGoods]= useState(visibleGoods);
    const paginate = usePagination(sortGoods, 12);
    const [btnType, setBtnType] = useState("");
    let st = {
        display: "flex",
        gap: "10px",
        marginLeft: "90px",
        padding: "10px"
    }
    const updSort = (e) => {
        let el = e.currentTarget;
        let flag = false;
        if (el.classList.contains("sort")) {
            el.classList.remove("sort");
            setBtnType("");
            flag = true;
        } else {
            el.classList.add("sort");
            setBtnType(el.title);
        }
        if (flag) {
            setSortGoods(visibleGoods);
        } else {
            let data = [...visibleGoods];
            switch (el.title) {
                case "down": 
                    data.sort((a,b) => a.price - b.price);
                    break;
                case "up":
                    data.sort((a,b) => b.price - a.price);
                    break;
                case "new":
                    data = data.filter(d => d.tags.includes("new"));
                    break;
                case "sale":
                    data = data.filter(el => el.discount > 0);
                    break;
            }
            setSortGoods(data);
        }
    }
    useEffect(() => {
                setSortGoods(visibleGoods);
    }, [visibleGoods]);

    return <>
        {user && <>
        {visibleGoods.length > 0 ? 
        <>
            <h1>Каталог товаров <BagCheck/></h1>
            <div style={st}>
                <button className={`btn ${btnType === "up" ? "sort" : ""}`} 
                    title="up" 
                    onClick={updSort}>
                    <SortNumericUp/> цены
                </button>
                <button className={`btn ${btnType === "down" ? "sort" : ""}`} 
                    title="down" 
                    onClick={updSort}>
                    <SortNumericDown/> цены
                </button>
                <button className={`btn ${btnType === "new" ? "sort" : ""}`} 
                title="new" onClick={updSort}>Новинки</button>
                <button className={`btn ${btnType === "sale" ? "sort" : ""}`} 
                title="sale" 
                onClick={updSort}>Скидка
                </button>
            </div>
            <Pagination hook={paginate}/>
            <div className="cards">
                    {paginate.setPageData().map((el, i) => 
                    <Link to={`/catalog/${el._id}`} key={el._id}>
                    <Card key={"card_" + i} {...el}/>
                    </Link>)}
            </div>
        </>
        :   <div className="empty-block">
                <EmojiFrown/>
                <p>Простите, по вашему запросу ничего не найдено</p>
                <Link to={PATH} className="btn">На главную</Link>
            </div>
        }
        </>}
            {!user &&
                <div className="empty-block">
                <EmojiFrown/>
                <p>Простите, у вас нет доступа к каталогу, вы не авторизованы</p>
                <Link to={PATH} className="btn">На главную</Link>
            </div>
            }        
        </>
}