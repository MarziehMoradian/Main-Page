import React from 'react';
import bread from '../images/bread.png';
import resturant from '../images/restaurant.png';
import hotel from '../images/hotel.png';
import kharobar from '../images/kharobar.png';

let Footer=(props)=>{
      
    return(
        <footer> 
            <div className="footerMain">
            <div className="titleFooter">
                <h1>بهترین همراهان ما</h1>
            </div>
            <div className="mainFoot">
            <div className="card">
               <a href="#"><img src={bread} alt=""  />
               <h3>نانوایی وقنادی ها</h3>
               </a>
               <nav class="nav--card"></nav>
            </div>
            <div className="card">
               <a href="#"><img src={resturant} alt=""  />
               <h3>رستوران ها</h3>
               </a>
               <nav class="nav--card"></nav>
            </div>
            <div className="card">
               <a href="#"><img src={hotel} alt="" />
               <h3>هتل</h3>
               </a>
               <nav class="nav--card"></nav>
            </div>
            <div className="card">
               <a href="#"><img src={kharobar} alt="" />
               <h3>سوپر مارکت</h3>
               </a>
               <nav class="nav--card"></nav>
            </div>
            </div>
            </div>
            
            
        </footer>
    )
}
export default Footer;