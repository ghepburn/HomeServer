import React from 'react';

class Button extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isClicked: false
        };

        this.handleClick = this.handleClick.bind(this);
        this.renderButton = this.renderButton.bind(this);
    }

    handleClick() {
        let newIsClicked = !this.state.isClicked;
        this.setState({isClicked: newIsClicked});
    }

    renderButton() {
        return(
            <button onClick={this.handleClick}>{this.props.title}</button>
        );
    }

    render() {
        return(
            this.renderButton()
        );
    }
}

export default Button;