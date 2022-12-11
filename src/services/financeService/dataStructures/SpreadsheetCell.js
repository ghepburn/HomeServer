

const SpreadsheetCell = ({value, onClick, customClass}) => {
    const click = () => {
        onClick(value);
    }
    
    let cusClass = customClass ? "spreadsheet-cell " + customClass : "spreadsheet-cell";

    return(
        <div className={cusClass}>
            <div onClick={click}>
                {value}
            </div>
        </div>
    );
}

export default SpreadsheetCell;