import React, { useState } from 'react';


const Button = ({title, onClick}) => {
    let [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        setIsClicked(!isClicked);
        onClick();
    }

    let className="button";
    let buttonClass = isClicked ? className + " buttonClicked" : className;

    return(
        <button className={buttonClass} onClick={handleClick} >{title.toUpperCase()}</button>
    );
}



export default Button;