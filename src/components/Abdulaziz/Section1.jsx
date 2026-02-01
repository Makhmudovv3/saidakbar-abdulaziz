import React from 'react';
import './Section1.css';
import a1 from "../../assets/a1.png";
import a2 from "../../assets/a2.png"; 
const Section1 = () => {
    return (
        <section className="sectionWrapper">
            <div className="mainContainer">

                <div className="leftSide">
                    <h1 className="mainTitle">
                        Поиск ближайшей свободной автомойки и бронирование на удобное время
                    </h1>

                    <div className="arrowContainer">
                        <span className="blueArrowDown"> ↓ </span>
                    </div>

                    <p className="subText">
                        Мы поможем сохранить ваше время для более интересных занятий,
                        чем стоять в очереди.
                    </p>

                    <button className="blueButton">
                        Получить доступ
                    </button>
                </div>

                <div className="rightSide">
                    <img src={a1} alt="Desktop App" className="phoneImg desktopImg" />

                    <img src={a2} alt="Mobile App" className="phoneImg mobileImg" />

                    <div className="circleBlue"></div>
                    <div className="circlePink"></div>
                </div>

            </div>
        </section>
    );
};

export default Section1;