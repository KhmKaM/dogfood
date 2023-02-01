import React, {useContext, useState} from "react";
import { useEffect } from "react";
import { Table, Image, Button, ButtonGroup } from "react-bootstrap";
import Ctx from "../Ctx";
import Row from "../components/Row/row";

export default () => {
    const [gds, setGds] = useState([]);
    const {basket, goods} = useContext(Ctx);
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
                    fw-bold fs-3">Итого: </td>
                    <td className="fw-bold fs-3">
                        {basket.reduce((acc, el, i) => {
                            acc += el.cnt * gds[i].price;
                            return acc;
                        }, 0)}Р
                    </td>
                </tr>
            </tfoot>
        </Table>}
    </>
}