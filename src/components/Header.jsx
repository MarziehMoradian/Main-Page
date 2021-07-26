import Img from './Img';
import Button from "./Button";
import Nav from "./Nav"
import Proptypes from "prop-types";
import React from "react";
/**
*Header component is for displaying main title
*/
const Header = (props) => {
    let lable="فروشگاه من";
    return (
        <header className="header" id="hamnav">
           <Nav />
           <label for="hamburger">&#9776;</label>
           <input type="checkbox" id="hamburger"/>
           <Img classes="img--logo"/>

           <div className="links--header" id="hamitems">
            
               <a href="">درباره ما</a>
               <a href="">کسب وکار</a>
               <a href=""> پشتیبانی </a>
               <a href=""> سوالات متداول </a>
            
            <Button buttonLabel={lable} />
           </div>
           
         
            
           
        
        </header>
    );
};
// Header.defaultProps = {

// };
Header.propTypes = {
headerTitle: Proptypes.string,

};
export default Header;
