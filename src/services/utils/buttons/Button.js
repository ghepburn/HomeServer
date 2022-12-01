import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';


const Button = ({title}) => {
    const className = "button";
    let location = useLocation();

    let [isClicked, setIsClicked] = useState(false);
    let [buttonClass, setButtonClass] = useState("button");

    const handleClick = () => {
        setIsClicked({isClicked: !isClicked});

        buttonClass = isClicked ? className + "buttonClicked" : className;
        setButtonClass(buttonClass);
    }

    return(
        <Link to={location.pathname + "/" + title.toLowerCase()}>
            <button className={buttonClass} onClick={handleClick} >{title.toUpperCase()}</button>
        </Link>
    );
}



export default Button;