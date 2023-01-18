import React, {useContext} from "react";
import Card from "../components/Card";
import {Link} from "react-router-dom";
import {EmojiFrown} from "react-bootstrap-icons";
import Ctx from "../Ctx";
import "./pages.css";
import usePagination from "../hooks/usePagination";
import Pagination from "../components/Pagination";

export default () => {
    const {visibleGoods, user, PATH} = useContext(Ctx);
    const paginate = usePagination(visibleGoods, 12);
    return <>
        {user && <>
        {visibleGoods.length > 0 ? 
        <>
            <h1>Каталог товаров</h1>
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