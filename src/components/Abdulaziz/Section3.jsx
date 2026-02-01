import React from 'react';
import { FileText, Calendar, MessageSquare, Star, CreditCard } from 'lucide-react';
import './Section3.css';

const Section3 = () => {
    return (
        <section className="partner-container">
            <div className="partner-header">
                <h1>Стань нашим партнером и начни зарабатывать:</h1>
                <p>
                    Автоматизируй свой бизнес вместе с нами. Подключись к нашей системе бронирования,
                    чтобы получать новых клиентов и распределить нагрузку равномерно на весь день.
                    Мы предоставляем удобные инструменты для формирования отчетов в несколько кликов и многое другое.
                </p>
            </div>

            <div className="features-grid">
                <div className="feature-card">
                    <div className="icon-wrapper">
                        <FileText size={24} />
                    </div>
                    <p className="feature-text">Просматривайте историю заказа</p>
                </div>

                <div className="feature-card">
                    <div className="icon-wrapper">
                        <Calendar size={24} />
                    </div>
                    <p className="feature-text">Создание отчета неделя/месяц/год</p>
                </div>

                <div className="feature-card">
                    <div className="icon-wrapper">
                        <MessageSquare size={24} />
                    </div>
                    <p className="feature-text">Обратная связь от клиентов</p>
                </div>

                <div className="feature-card">
                    <div className="icon-wrapper">
                        <Star size={24} />
                    </div>
                    <p className="feature-text">Контроль качества работы сотрудников</p>
                </div>

                <div className="feature-card">
                    <div className="icon-wrapper">
                        <CreditCard size={24} />
                    </div>
                    <p className="feature-text">Бесконтактная оплата работы</p>
                </div>
            </div>

            <button className="partner-button">Стать партнером</button>
        </section>
    );
};

export default Section3;