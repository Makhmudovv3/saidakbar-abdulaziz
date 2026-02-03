import React from 'react';
import './Section5.css';
import pupil from "../../assets/pupil.png"

const Section5 = () => {
  return (
    <section className="testimonial-container">
      <div className="testimonial-header">
        <h2 className="testimonial-title">Отзывы о приложении</h2>
        <div className="testimonial-controls">
          <button className="control-btn prev" aria-label="Previous">
            <span className="arrow">‹</span>
          </button>
          <button className="control-btn next" aria-label="Next">
            <span className="arrow">›</span>
          </button>
        </div>
      </div>

      <div className="testimonial-content">
        <p className="testimonial-text">
          Таким образом консультация с широким активом влечет за собой процесс внедрения и
          модернизации направлений прогрессивного развития. Разнообразный и богатый опыт
          сложившаяся структура организации обеспечивает широкому кругу (специалистов)
          участие в формировании модели развития.
        </p>
        
        <div className="testimonial-divider"></div>

        <div className="testimonial-author">
          <div className="author-avatar">
            <img 
              src={pupil} alt=""/>
          </div>
          <div className="author-info">
            <h4 className="author-name">John Doe</h4>
            <p className="author-job">Водитель</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section5;