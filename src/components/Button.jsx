import Proptypes from "prop-types";
import React from "react";
let Button = ({ buttonLabel}) => {

    return <button className="btn--logo" >{buttonLabel}</button>;
};
    Button.propTypes = {
    buttonLabel: Proptypes.string,
    classes: Proptypes.string,
    onClick:Proptypes.func,
};
export default Button;
