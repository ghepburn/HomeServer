import List from "../../utils/List";
import Row from "../../utils/Row";
import SpreadsheetCell from "./SpreadsheetCell";

const Spreadsheet = (props) => {

    let columns = props.columns;
    let items = props.data.map((item) => {
        return <SpreadsheetCell data={item} columns={columns} />;
    })

    let topRow = <Row data={columns} />

    let spreadsheet =<List data={items} />

    return(
        <div className="spreadsheet">
            {topRow}
            {spreadsheet}
        </div>
    );
}

export default Spreadsheet;