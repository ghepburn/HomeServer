import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../utils/Button';

class DashboardButton extends Button {

    constructor(props) {
        super(props);
    }

    handleClick() {
        return (
            super.handleClick()
        );
    }

    renderButton() {

        let buttonClass = "dashboardButton";
        buttonClass = this.state.isClicked ? buttonClass + " buttonClicked" : buttonClass;
        
        return(
            <Link to={"/" + this.props.title.toLowerCase()}>
                <button className={buttonClass} onClick={this.handleClick} >{this.props.title.toUpperCase()}</button>
            </Link>
        );
    }
}

export default DashboardButton;