import React from "react";
import Card from "../components/Card";
import {Link} from "react-router-dom";
import {EmojiFrown} from "react-bootstrap-icons";
import "./pages.css";

export default ({data}) => {
    return <>
        {data.length > 0 ? 
        <>
            <h1>Каталог товаров</h1>
            <div className="cards">
                    {data.map((el, i) => 
                    <Link to={`/catalog/${el._id}`} key={el._id}>
                    <Card key={"card_" + i} 
                        text={el.name} 
                        like={(i + 1) % 2 === 0}
                        price={el.price}
                        pictures={el.pictures}
                        weight={el.wight}/>
                    </Link>)}
            </div>
        </>
        :   <div className="empty-block">
                <EmojiFrown/>
                <p>Простите, по вашему запросу ничего не найдено</p>
                <Link to="/" className="btn">На главную</Link>
            </div>
        }
    </>
}