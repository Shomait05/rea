import React from 'react';
import '../css/App5.css';
import lala from '../img/lala.png';

const Block5 = () =>{

    return(
        <div className='text_div'>
            <div className='footer_text'>
                <ul className='footer_list'>
                <li><img className='lala' src={lala} alt="3"/></li>  
                    <div className='text_fir'>
                    <li> <h2 className='fir1'>Прокат велосипедов</h2></li>
                    <li> <p className='fir'>У нас вы можете взять на прокат хорошо обслуженные и настроенные велосипеды. Как раз мы находимся в прекрасном парке!</p></li>
                   </div>
                                 
                </ul>
            </div>
        </div>

    )
};
export default Block5;