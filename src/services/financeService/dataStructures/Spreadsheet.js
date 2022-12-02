import List from "../../utils/List";
import Row from "../../utils/Row";
import SpreadsheetCell from "./SpreadsheetCell";

const Spreadsheet = ({data, sortBy}) => {
    const columns = data.length > 0 ? Object.keys(data[0]) : [];
    const itemsInRow = columns.length;
   
    let topRowCells = columns.map((col) => {
        return <SpreadsheetCell value={col} onClick={sortBy}/>
    })
    let topRow = <Row data={topRowCells} />
    
    let bottomRows = [];

    let dataIsProvided = Array.isArray(data) && data.length > 0;
    if (dataIsProvided) {
        let spreadsheetRows = data.map((item) => {
            let cells = Object.keys(item).map((key) => {
                let value = item[key];
                return <SpreadsheetCell value={value} />
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