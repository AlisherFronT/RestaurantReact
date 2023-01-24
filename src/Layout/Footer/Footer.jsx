import React from 'react';
import {Link} from "react-router-dom";

const Footer = () => {
    return (
        <footer className="footer">
            <nav className="footer__nav">
                <a href="#" className="footer__goTop">
                    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="32" cy="32" r="32" fill="white"/>
                        <path d="M34.0607 25.9396C33.4749 25.3538 32.5252 25.3538 31.9394 25.9396L22.3935 35.4856C21.8077 36.0714 21.8077 37.0211 22.3935 37.6069C22.9793 38.1927 23.9291 38.1927 24.5148 37.6069L33.0001 29.1216L41.4854 37.6068C42.0712 38.1926 43.0209 38.1926 43.6067 37.6068C44.1925 37.021 44.1925 36.0712 43.6067 35.4855L34.0607 25.9396ZM34.5001 29.0001L34.5 27.0002L31.5 27.0003L31.5001 29.0001L34.5001 29.0001Z" fill="#222021"/>
                    </svg>
                </a>
                <div className="footer__info">
                    <h2 className="header__title">
                        LOGOS
                    </h2>
                    <p className="footer__copy">
                        © ООО СК «АПШЕРОН» <br/>
                        Все права защищены. 2010-2020
                    </p>
                    <a href="" className="footer__doc">
                        Пользовательское соглашение
                    </a>
                    <a href="" className="footer__doc">
                        Карта сайта
                    </a>
                    <a href="" className="footer__doc">
                        Политика конфиденциальности
                    </a>
                </div>
                <ul className="footer__menu">
                    <li className="footer__item">
                        <a href="" className="footer__link">
                            О ресторане
                        </a>
                    </li>
                    <li className="footer__item">
                        <Link to="/delivery" className="footer__link">
                            Условия доставки
                        </Link>
                    </li>
                    <li className="footer__item">
                        <a href="" className="footer__link">
                            Возврат товара
                        </a>
                    </li>
                    <li className="footer__item">
                        <Link to="/sales" className="footer__link">
                            Акции
                        </Link>
                    </li>
                </ul>
            </nav>
        </footer>
    );
};

export default Footer;