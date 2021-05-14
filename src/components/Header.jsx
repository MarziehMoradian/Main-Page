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
       <header className="header">
           <Img classes="img--logo"/>
          {/* <div className="img--logo">
          </div> */}

           <div className="links--header">
               <a href="">درباره ما</a>
               <a href="">کسب وکار</a>
               <a href=""> پشتیبانی </a>
               <a href=""> سوالات متداول </a>
           </div>
           
           
        <Nav />
        <Button buttonLabel={lable} />
        
        </header>
    );
};
// Header.defaultProps = {

// };
Header.propTypes = {
headerTitle: Proptypes.string,

};
export default Header;
