import React, { useState } from "react";

import List from "../../../utils/List";
import Row from "../../../utils/Row";
import InputBox from "../../../utils/InputBox";
import SelectionBox from "../../../utils/SelectionBox";
import Button from "../../../utils/buttons/Button";


const FilterDisplay = ({filters, filterOptions, selectFilterArgument, selectFilterValue}) => {
    const filterArgumentOptions = ["", "=", ">", "<", "!="];
    let argumentSelectBoxes = filterArgumentOptions.map((arg) => {
        return <option value={arg}>{arg}</option>;
    });


    let filterDisplay = Object.keys(filters) ? Object.keys(filters).map((key) => {
        let filterName = key;

        let selectBoxOptions = [];
        filterOptions[key].forEach((filterOption) => {
            let option = <option value={filterOption}>{filterOption}</option>;
            selectBoxOptions.push(option);
        });

        let filterValue = <select onChange={e => selectFilterValue(filterName, e.target.value)}>{selectBoxOptions}</select>;
        let argumentSelectBoxOptions = <select onChange={e => selectFilterArgument(filterName, e.target.value)}>{argumentSelectBoxes}</select>

        let tableRow = <tr>
            <td>{filterName}</td>
            <td>{argumentSelectBoxOptions}</td>
            <td>{filterValue}</td>
        </tr>
        return tableRow;     
    }) : [];
    


    return(
        <div className="filterDisplay">
            <table className="filter-display">
                {filterDisplay}
            </table>
        </div>
    );
}
export default FilterDisplay