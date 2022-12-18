import React from "react";
import "./footer.css";
import {ReactComponent as LogoImg} from "./img/logo.svg";

export default () => {
    return <footer className="footer-style">
            <a className="logo" href="">
                <LogoImg/></a>
            <span className="copy">&copy; 
                «Интернет-магазин DogFood.ru»</span>
            <a href="">Каталог</a>
            <a href="">Акции</a>
            <a href="">Новости</a>
            <a href="">Отзывы</a>
            <a href="">Оплата и доставка</a>
            <a href="">Часто спрашивают</a>
            <a href="">Обратная связь</a>
            <a href="">Контакты</a>
            <div className="contacts">
                <p>Мы на связи</p>
                <a className="mobile" href="tel:8999000000">
                    8 (999) 00-00-00</a>
                <a className="mail" href="mailto:hordog.ru@gmail.com">
                    dogfood.ru@gmail.com</a>
                <nav className="brands">
                    <a href=""><i className="fa-brands fa-vk"></i></a>
                    <a href=""><i className="fa-brands fa-odnoklassniki"></i></a>
                    <a href=""><i className="fa-brands fa-telegram"></i></a>
                    <a href=""><i class="fa-brands fa-instagram"></i></a>
                    <a href=""><i class="fa-brands fa-whatsapp"></i></a>
                </nav>
            </div>
    </footer>
}

