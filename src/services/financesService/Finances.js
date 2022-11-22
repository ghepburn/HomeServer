import Navbar from "../navigation/Navbar";
import Spreadsheet from "./dataStructures/Spreadsheet";
import FinanceClient from "./FinanceClient";

const Finances = () => {

    let client = new FinanceClient("127.0.0.1:5000");

    let finances = [];
    if (finances.length == 0) {
        finances = client.getTransactions();
            
        console.log("GREG finances:");
        console.log(finances);
    }

    let columns = ["name", "age", "balance"];

    if (finances.length > 0) {
        finances = <Spreadsheet data={finances} columns={columns}/>
    }

    return(
        <div className="finances">
            <Navbar />
            <p>Finances</p>
            {finances}
        </div>
    );
}

export default Finances;