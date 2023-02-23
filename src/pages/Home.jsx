import React from "react";
import Card from "../components/Card";
import Ads from "../components/Ads/ads";
import {Link} from "react-router-dom";
import "./pages.css";

export default ({data}) => {
    const flag = "true";
    return <>
        <Ads/>
        <div className="top-page">
            <h2>Крафтовые лакомства<br/>для собак</h2>
            <p>Всегда свежие лакомства ручной<br/> 
                работы c доставкой по России и Миру</p>
            <button><Link to="/catalog">Перейти в каталог</Link></button>
        </div>

        <div className="home">
            <a href="" className="first-block">
                <div className="first-block__item">
                    <h2>Подарок за
                        <br />
                        первый заказ!</h2>
                    <p>Собачье лакомство "Легкое говяжье"</p>
                </div>
                <img src="https://www.vipkorma.ru/out/pictures/master/product/1/legkoe(1).jpg"/>
            </a>

            <div className="ad-block second-block">
                <a href="" className="ad-block__item feed">
                    <div>
                        <h3>Сухой корм для средних собак</h3>
                        <p>от 10 до 30 кг</p>
                    </div>
                    <img className="second-block__img" 
                    src="https://www.tinydog.ru/wp-content/uploads/2016/07/Suhoj-korm.jpg"/>
                </a>
                <a href="" className="ad-block__item tng">
                    <div>
                        <h3>Наборы для тренировок</h3>
                    </div>
                    <img className="second-block__img" 
                    src="https://www.stellexshop.ru/upload/iblock/0ed/_-_.jpg" />
                </a>
                <a href="" className="ad-block__item toys">
                    <div>
                        <h3>Игрушки для собак</h3>
                    </div>
                    <img className="second-block__img" 
                    src="https://cdn1.ozone.ru/s3/multimedia-3/6139619127.jpg" />
                </a>
            </div>

            <div className="cards">
                {data.map((el, i) => <Card {...el} flag={flag} key={"card_" + i} />)}
            </div>

        <div className="ad-block">
                <a href="#" className="ad-block__item blue">
                    <div>
                        <h3>Ломтики крольчатины</h3>
                        <p>100% натуральное</p>
                    </div>
                    <img className="ad-block__img" 
                    src="https://kormberi.ru/images/detailed/1/1016002512.jpg" />
                </a>
                <a href="#" className="ad-block__item">
                    <div>
                        <h3>Аромотерапия для собак</h3>
                        <p>
                            Ароматерапия используется
                            <br />
                            для лечения тика и волнения у собак
                        </p>
                    </div>
                    <img className="ad-block__img" 
                    src="https://medicul.ru/wp-content/uploads/2021/01/aromaterapija5.jpeg" />
                </a>
            </div>
        </div>
    </>
}