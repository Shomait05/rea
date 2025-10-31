import React from 'react';
import '../css/App4.css';

const Block4 =  () =>{
    
    return(   <div className="block_1">
        <ul className="block_list"> 
            <li><div className="block_list1">
                <div className="block_list1_title">
                    <div className="text_1">
                    Годовое ТО
                    </div>
                </div>
                </div></li>
                <li><div className="block_list2">
                <div className="block_list2_title">
                    <div className="text2">
                    Выравнивание колес
                    </div>
                </div>
                </div></li>
                <li><div className="block_list3">
                <div className="block_list3_title">
                    <div className="text3">
                    Настройка переключателей
                    </div>
                </div>
                </div></li>
        </ul>
    </div>

    )
};
export default Block4;