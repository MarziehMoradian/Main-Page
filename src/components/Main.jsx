import coin from '../images/icon-price.png';
import groupimg from '../images/people1.png';
import leaf from '../images/leaf.png';
import React from 'react';


const Main=(props)=>{
    return(
        <main className="main">
            <div className="column">
                <div className="img">
                <img src={leaf} className="leafImg" />
                </div>
                <p>اسراف کمتر</p>
            </div>
            <div className="column">
                <div className="img">
                    <img src={groupimg} className="groupImg"/>
                </div>
                <p>مشتریان جدید</p>
            </div>
            <div className="column">
                <div className="img">
                    <img src={coin} className="coinImg"/>
                    
                </div>
                <p>درآمد بیشتر</p>
            </div>
          
        </main>
        
    )
}
export default Main;