import React from 'react' ;
import '../css/App2.css';
import bike from  '../img/bike.png'; 

const Block2 = () =>{
    return(
        <div className='body1'>
            <div className='body_title'>
                <h3>Что мы предлагаем</h3>
            </div>
            <div className='body_text'>
             <ul className='body_txt'>
               <li><p className='p2'> Все работы выполняем качественно и с душой.В нашей мастерской можно выполнить комплексное техническое обслуживание велосипеда, ремонт и настройку всех его узлов, шиномонтажные работы. Вовремя проведенное ТО велосипеда помогает избежать многих проблем и дорогого ремонта. Все работы выполняем качественно и с душой.</p></li>
               <li><img className='body_img' src={bike} alt='1'/></li> 
             </ul>
            </div>
        </div>
    )
};
export default Block2;
