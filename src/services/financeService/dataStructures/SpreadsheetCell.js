

const SpreadsheetCell = ({value, onClick}) => {
    const click = () => {
        onClick(value);
    }
    
    return(
        <div className="spreadsheet-cell" onClick={click}>
            {value}
        </div>
    );
}

export default SpreadsheetCell;