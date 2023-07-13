import React, { useState } from "react";
import FilterDisplay from "./FilterDisplay";
import Button from "../../../utils/buttons/Button";

class Filter extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedFilterValues: {},
            selectedFilterArguments: {}
        };
    }

    tryToApplyFilter = (filterName) => {
        let filterValue = this.state.selectedFilterValues[filterName];
        let filterArgument = this.state.selectedFilterArguments[filterName];

        let isValidFilter = (typeof filterValue != "undefined" && typeof filterArgument != "undefined");
        if (!isValidFilter) {
            return null;
        }

        this.props.applyFilter(filterName, filterArgument, filterValue);
    }

    selectFilterArgument = (filterName, filterArgument) => {
        let selectedFilterArguments = this.state.selectedFilterArguments;
        selectedFilterArguments[filterName] = filterArgument;
        this.setState({selectedFilterArguments: selectedFilterArguments},() => {
            this.tryToApplyFilter(filterName);
        });
    }

    selectFilterValue = (filterName, filterValue) => {
        let selectedFilterValues = this.state.selectedFilterValues;
        selectedFilterValues[filterName] = filterValue;
        this.setState({selectedFilterValues: selectedFilterValues}, () => {
            this.tryToApplyFilter(filterName);
        });
    }

    render() {
        let filterOptions = {};
        Object.keys(this.props.filters).map((filterKey) => {
            filterOptions[filterKey] = [""];

            this.props.data.forEach((row) => {
                let rowValue = row[filterKey];
                let isUniqueValue = !filterOptions[filterKey].includes(rowValue);
                if (isUniqueValue) {
                    filterOptions[filterKey].push(row[filterKey]);
                }
            });
        });

        let filterDisplay = <FilterDisplay filters={this.props.filters} filterOptions={filterOptions} selectFilterArgument={this.selectFilterArgument} selectFilterValue={this.selectFilterValue}/>;

        return(
            <div className="filter">
                {filterDisplay}
            </div>
        );
    }
}   

export default Filter;