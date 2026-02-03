import React from 'react'
import "./Section4.css"
import apple from "../../assets/apple.png"
import google from "../../assets/google.png"
import phone from "../../assets/phone.png"

const Section4 = () => {
  return (
    <section className='sec4'>
        <div className='sec4wr'>
            <div>
            <h1>Хватит тратить свое <br />время в очередях</h1>
            <p>Приложение скоро будет доступно для бета <br />тестирования в AppStore и Google Play</p>
            <div className='sec4imgs'>
                <img src={apple} alt="" />
                <img src={google} alt="" />
            </div>
        </div>
                <img className='phone' src={phone} alt="" />
        </div>
    </section>
  )
}

export default Section4