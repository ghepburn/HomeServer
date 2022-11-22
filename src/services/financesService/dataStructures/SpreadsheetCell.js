import Transaction from "./Transaction";

const SpreadsheetCell = (props) => {

    let cell = <Transaction data={props.data} columns={props.columns}/>;

    return(
        <div className="spreadsheet-cell">
            {cell}
        </div>
    );
}

export default SpreadsheetCell;