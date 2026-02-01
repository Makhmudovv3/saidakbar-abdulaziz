import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
    const [active, setActive] = useState(false);

    return (
        <nav className="navbar">
            <div className="logo">GetWash</div>

            <ul className={`nav-menu ${active ? 'open' : ''}`}>
                <li><a href="#">Как использовать</a></li>
                <li><a href="#">Партнерам</a></li>
                <li><a href="#">Скачать</a></li>
                <li><a href="#">Отзывы</a></li>

                <div className="mobile-btns">
                    <button className="btn-blue">Получить доступ</button>
                    <button className="btn-border">Стать партнером</button>
                </div>
            </ul>

            <button className="btn-desktop">Получить доступ</button>

            <div className="burger" onClick={() => setActive(!active)}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </nav>
    );
};

export default Navbar;