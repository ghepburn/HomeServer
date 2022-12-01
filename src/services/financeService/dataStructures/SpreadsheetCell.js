import Transaction from "./Transaction";

const SpreadsheetCell = ({value}) => {

    return(
        <div className="spreadsheet-cell">
            {value}
        </div>
    );
}

export default SpreadsheetCell;