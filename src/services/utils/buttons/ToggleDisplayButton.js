import React, { useState } from "react";
import Button from "./Button";

const ToggleDisplayButton = ({title, display}) => {

    let [showDisplay, setShowDisplay] = useState(false);
    
    const toggleDisplay = () => {
        setShowDisplay(!display);
    }

    let button = <Button title={title} onClick={toggleDisplay} />
    let content = showDisplay ? {display} : "";

    return(
        <div className="toggled-display">
            {button}
            <p>{showDisplay}</p>
            {content}
        </div>
    );
}

export default ToggleDisplayButton;