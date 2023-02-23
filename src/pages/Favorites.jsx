import React, {useContext} from "react";
import Card from "../components/Card";
import {Link} from "react-router-dom";
import {EmojiFrown, BagCheck} from "react-bootstrap-icons";
import Ctx from "../Ctx";
import "./pages.css";
import usePagination from "../hooks/usePagination";
import Pagination from "../components/Pagination";

export default () => {
    const {favorites, PATH} = useContext(Ctx);
    const paginate = usePagination(favorites, 3);
    return <>
        {favorites.length > 0 
            ? <>
                <Pagination hook={paginate}/>
                <div className="cards">
                    {paginate.setPageData().map((el, i) => 
                        <Link to={`/catalog/${el._id}`} 
                    key={el._id}>
                        <Card key={"card_" + i} {...el}/>
                    </Link>)}
                </div>
                <Link to={PATH +'catalog'}><h2> Вернуться в каталог <BagCheck/></h2></Link>
            </>
            : <div className="empty-block">
                <EmojiFrown/>
                <p>Вы еще не добавили ни одного любимого товара</p>
                <Link to={PATH+"catalog"} className="btn">В каталог</Link>
            </div>
        }
    </>
}