import React, { useState } from "react";
// import FilterDisplay from "./FilterDisplay";
import Button from "../../../utils/buttons/Button";

class Summary extends React.Component {

    constructor(props) {
        super(props);

        this.state={
            showSummary: false,
        }
    }

    toggleSummaryDisplay = () => {
        this.setState({showSummary: !this.state.showSummary});
    }

    render() { 
        let summaryDisplay = <p>Summary</p>
        let summary = this.state.showSummary ? summaryDisplay : "";

        return(
            <div className="summary">
                <Button title="Summary" onClick={this.toggleSummaryDisplay}/>
                {summary}
            </div>
        );
    }
}   

export default Summary;