import React from "react";
import ButtonMenu from "./buttons/ButtonMenu";

class Service extends React.Component {

    constructor(props) {
        super(props);

        this.subServices = this.subServices ?? [];

        this.state = {};
    }

    render() {
        let menu = <ButtonMenu buttonTitles={this.subServices} />

        return(
            <div className = "service">
                {menu}
            </div>
        );
    }
}

export default Service;