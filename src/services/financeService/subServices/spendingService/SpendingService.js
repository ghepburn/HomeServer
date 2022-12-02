
import FinanceClient from "../../FinanceClient";
import Spreadsheet from "../../dataStructures/Spreadsheet";
import Filterable from "../../dataStructures/Filterable";
import React from "react";

class SpendingService extends React.Component {
    client = new FinanceClient("http://127.0.0.1:5000");

    constructor(props) {
        super(props);

        this.state = {
            transactions: [],
            transactionTypes: {},
            transactionCategories: {},
            transactionSources: {},

            sortDirection:false, //allows sorting to alternate directions
            fitlers: {}
        }

    } 

    async componentDidMount() {
        let transactions = await this.client.getTransactions();
        this.setState({transactions: transactions});

        let manipulatedTransactions = [];
        this.setState({manipulatedTransactions: manipulatedTransactions});

        let transactionTypes = await this.client.getTransactionTypes();
        this.setState({transactionTypes: transactionTypes});

        let transactionCategories = await this.client.getTransactionCategories();
        this.setState({transactionCategories: transactionCategories});

        let transactionSources = await this.client.getTransactionSources();
        this.setState({transactionSources: transactionSources});
    }

    sortBy = (sortBy) => {
        let transactions = this.state.transactions;

        // sort transactions by sortBy
        let sortDirection = this.state.sortDirection;

        transactions.sort(
            (a, b) => {
                if (sortDirection) {
                    if(a[sortBy] > b[sortBy]) return 1;
                    if(a[sortBy] < b[sortBy]) return -1;
                    return 0;
                } else {
                    if(a[sortBy] < b[sortBy]) return 1;
                    if(a[sortBy] > b[sortBy]) return -1;
                    return 0;
                }
            }
        );

        this.setState({transactions: transactions});
        this.setState({sortDirection: !sortDirection});
    }

    render() {

        filterableData = <Filterable data={this.state.transactions} />
        let spreadsheet = <Spreadsheet data={filterableData} sortBy={this.sortBy}/>;

        return(
            <div className="finances">
                <p>Spending History</p>
                {spreadsheet}
            </div>
        );
    }
}

export default SpendingService;