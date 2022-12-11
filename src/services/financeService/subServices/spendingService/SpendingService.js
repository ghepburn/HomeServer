
import FinanceClient from "../../FinanceClient";
import Spreadsheet from "../../dataStructures/Spreadsheet";
import Filter from "../../dataStructures/filter/Filter";
import React from "react";

class SpendingService extends React.Component {
    client = new FinanceClient("http://127.0.0.1:5000");

    constructor(props) {
        super(props);

        this.state = {
            transactions: [],

            sortDirection:false, //allows sorting to alternate directions
            fitlers: {}
        }

    } 

    async componentDidMount() {
        this.getTransactions();
    }

    getTransactions = async (args={}) => {
        let transactions = await this.client.getTransactions(args);
        transactions = transactions.map((transaction) => {
            return transaction;
        })
        this.setState({transactions: transactions});
    }

    sortBy = (sortBy) => {
        let transactions = this.state.transactions;

        let sortDirection = this.state.sortDirection;

        transactions.sort(
            // > 0 -> sort a after b
            // < 0 -> sort a before b
            // == 0 -> keep origional order of a and b
            (a, b) => {
                if (sortDirection) {
                    if(a[sortBy] > b[sortBy]) return 1;
                    if(a[sortBy] < b[sortBy]) return -1;
                    if(a[sortBy] == null && b[sortBy] == null) return 0;
                    if(a[sortBy] != null && b[sortBy] == null) return 1;
                    if(a[sortBy] == null && b[sortBy] != null) return -1;
                    return 0;
                } else {
                    if(a[sortBy] < b[sortBy]) return 1;
                    if(a[sortBy] > b[sortBy]) return -1;
                    if(a[sortBy] == null && b[sortBy] == null) return 0;
                    if(a[sortBy] != null && b[sortBy] == null) return -1;
                    if(a[sortBy] == null && b[sortBy] != null) return 1;
                    return 0;
                }
            }
        );

        this.setState({transactions: transactions});
        this.setState({sortDirection: !sortDirection});
    }

    filterBy = (filterName, filterValue) => {
        let filters = this.state.filters;

        let filterExists = filters[filterName] ? filters[filterName] == filterValue : false;

        if(filterExists) {
            delete filters[filterName];
        } else {
            filters[filterName] = filterValue;
        }

        this.getTransactions(filters)
        this.setState({filters: filters});
    }

    render() {

        let spreadsheet = <Spreadsheet data={this.state.transactions} sortBy={this.sortBy} filterBy={this.filterBy}/>;
        let transactionFilter = <Filter filterBy={this.filterBy} filterData={this.state.transactions}/>;

        return(
            <div className="finances">
                <p>Spending History</p>
                <div className="spreadsheet-header">
                    {transactionFilter}
                </div>
                {spreadsheet}
            </div>
        );
    }
}

export default SpendingService;