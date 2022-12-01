
import FinanceClient from "../../FinanceClient";
import Spreadsheet from "../../dataStructures/Spreadsheet";
import React from "react";

class SpendingService extends React.Component {
    client = new FinanceClient("http://127.0.0.1:5000");

    constructor(props) {
        super(props);

        this.state = {
            transactions: []
        }

    } 

    async componentDidMount() {
        let transactions = await this.client.getTransactions("/transactions");
        this.setState({transactions: transactions});
    }

    render() {

        let spreadsheet = <Spreadsheet data={this.state.transactions} />;

        return(
            <div className="finances">
                <p>Spending History</p>
                {spreadsheet}
            </div>
        );
    }
}

export default SpendingService;