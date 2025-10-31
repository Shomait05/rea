import React from 'react';
import '../css/App.css';
import amidura from '../img/amidura.png';
import dinozavr from '../img/dinozavr.png';
const Block1 = () =>{
    return(
        <div className='block1'>

         
            <ul className='hedear_list'>\
            <li><img className='amidura' src={amidura} alt='1'/></li> 
                <li>О нас</li>
                <li>Услуги</li>
                <li>Аренда</li>
                <li className='four'><button>Связаться</button></li>
            </ul>
            <ul>
        <h1>Веломестерская "Велозавр"</h1>
        <div className='side'>
            <ul className='small'>
                <li><p>Мы,мастера веломестреской "Велозавр", как раз те самые люди , которые смогли превратить свое увлечение и хобби в профессию. Мы сами любим кататся и хотим чтобы Ваш двухколесный друг приносил Вам только радость и удовольстиве от езды.</p></li>
                <li><img className='dino' src={dinozavr} alt='2'/></li>
            </ul>
        </div>
        </ul>
        </div> 
    )

};
export default Block1;
