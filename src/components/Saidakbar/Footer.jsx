import React from 'react'
import logo from "../../assets/logo.png"
import "./Footer.css"

const Footer = () => {
  return (
    <footer>
        <img src={logo} alt="" />
        <h3>Как использовать</h3>
        <h3>Партнерам </h3>
        <h3>Скачать </h3>
        <h3>Отзывы</h3>
        <button className='get'>Получить доступ</button>
    </footer>
  )
}

export default Footer