import List from "../../utils/List";
import Row from "../../utils/Row";
import SpreadsheetCell from "./SpreadsheetCell";

const Spreadsheet = ({data, sortBy}) => {
    const doNotDisplay = ["isHidden"];

    const columns = data.length > 0 ? Object.keys(data[0]) : [];
    const itemsInRow = columns.length;
   
    let topRowCells = columns.map((col) => {
        col = col.replaceAll("_", " ");
        let cusClass = doNotDisplay.includes(col) ? "hidden" : "";
        return <SpreadsheetCell value={col} onClick={sortBy} customClass={cusClass}/>
    })
    let topRow = <Row data={topRowCells} />
    
    let bottomRows = [];

    let dataIsProvided = Array.isArray(data) && data.length > 0;
    if (dataIsProvided) {
        let spreadsheetRows = data.map((item) => {
            let cells = Object.keys(item).map((key) => {
                let value = item[key];
                let cusClass = doNotDisplay.includes(key) ? "hidden" : "";
                return <SpreadsheetCell value={value} customClass={cusClass}/>
            });

            return <Row data={cells} />;
        })

        bottomRows = <List data={[spreadsheetRows]} />;
    }

    return(
        <div className="spreadsheet">
            <div className="spreadsheet-topbar">
                {topRow}
            </div>
            <div className="spreadsheet-content">
                {bottomRows}
            </div>
            <div className="spreadsheet-footer">
                {/* <p>FOOTER</p> */}
            </div>
        </div>
    );
}

export default Spreadsheet;