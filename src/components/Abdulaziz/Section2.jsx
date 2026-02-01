import React from 'react';
import { Download, MapPin, Settings, Wallet } from 'lucide-react';
import './Section2.css';
import a3 from "../../assets/a3.png"
const Section2 = () => {
    return (
        <div className="main-container">
            <div className="left-side">
                <img src={a3} alt="App Preview" className="app-image" />
            </div>

            <div className="right-side">
                <h2 className="main-title">Быстрый старт:</h2>

                <div className="step-card">
                    <div className="step-icon-box">
                        <Download size={24} color="#3b71fe" />
                    </div>
                    <div className="step-info">
                        <h4 className="step-name">Скачай и зарегистрируйся</h4>
                        <p className="step-text">Наше приложение доступно в Apple Store и Google Play</p>
                    </div>
                </div>

                <div className="step-card">
                    <div className="step-icon-box">
                        <MapPin size={24} color="#3b71fe" />
                    </div>
                    <div className="step-info">
                        <h4 className="step-name">Выбери ближайшую автомойку</h4>
                        <p className="step-text">Из свободных поблизости или оставь заказ на удобное время</p>
                    </div>
                </div>

                <div className="step-card">
                    <div className="step-icon-box">
                        <Settings size={24} color="#3b71fe" />
                    </div>
                    <div className="step-info">
                        <h4 className="step-name">Выбери дополнительные услуги</h4>
                        <p className="step-text">Можешь их добавить к своему основному заказу</p>
                    </div>
                </div>

                <div className="step-card">
                    <div className="step-icon-box">
                        <Wallet size={24} color="#3b71fe" />
                    </div>
                    <div className="step-info">
                        <h4 className="step-name">Оплати внутри приложения</h4>
                        <p className="step-text">Бесконтактная оплата внутри приложения и прозрачные цены</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Section2;