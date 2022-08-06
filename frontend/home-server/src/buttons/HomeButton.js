import React from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';

class HomeButton extends Button {

    constructor(props) {
        super(props);
    }

    handleClick() {
        return (
            super.handleClick()
        );
    }

    renderButton() {
        return(
            <Link className="homeButton" onClick={this.handleClick} to={this.props.route}>Let's Go!</Link>
        );
    }
}

export default HomeButton;