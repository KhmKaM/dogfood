import React, {useContext, useState, useEffect} from "react";
import { Table } from "react-bootstrap";
import {Link} from "react-router-dom";
import {EmojiFrown} from "react-bootstrap-icons";
import Ctx from "../Ctx";
import Row from "../components/Row/row";

export default () => {
    const [gds, setGds] = useState([]);
    const {basket, goods, PATH} = useContext(Ctx);

    useEffect(() => {
        let arr = [];
        if (goods.length && basket.length) {
            basket.forEach(el => {
                arr.push(goods.filter(g =>
                    g._id === el.id)[0]);
            })
        }
        setGds(arr);
    }, [basket, goods])

    return <>
        {basket.length > 0 
            ? <>
            <h1>Корзина</h1>
            {basket.length > 0 && gds.length > 0 && <Table hover>
                <thead>
                    <tr>
                        <th>Изображение</th>
                        <th>Название</th>
                        <th>Количество</th>
                        <th>Цена</th>
                    </tr>
                </thead>
                <tbody>
                    {basket.map((el, i) => <Row key={el.id}
                        {...gds[i]} {...el}/>)}
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan={3} 
                        className="text-end
                        fw-bold fs-3">Общая стоимость: </td>
                        <td className="fw-bold fs-3">
                            {basket.reduce((acc, el, i) => {
                                acc += el.cnt * gds[i].price;
                                return acc;
                            }, 0)} ₽
                        </td>
                    </tr>
                </tfoot>
            </Table>}
        </>
            : <div className="empty-block">
                    <EmojiFrown/>
                    <h2>В корзине пока нет ни одного товара</h2>
                    <p>Добавьте товар, нажав кнопку «Купить» в карточке товара</p>
                    <Link to={PATH+"catalog"} className="btn">В каталог</Link>
            </div>
        }
    </>
}