
import FinanceClient from "../../FinanceClient";
import Spreadsheet from "../../dataStructures/Spreadsheet";
import Filter from "../../dataStructures/filter/Filter";
import Summary from "../../dataStructures/summary/Summary";
import Button from "../../../utils/buttons/Button";
import React from "react";

class SpendingService extends React.Component {
    client = new FinanceClient("http://127.0.0.1:5000");

    constructor(props) {
        super(props);

        this.state = {
            transactions: [],
            transactionColumns: [],

            sortDirection:false, //allows sorting to alternate directions
            filters: {},
            showFilter: false
        }

    } 

    async componentDidMount() {
        await this.getTransactions();        
        this.initializeFilter();
    }

    getTransactions = async (args={}) => {
        let transactions = await this.client.getTransactions(args);
        if (transactions == null) {
            return null;
        }
        transactions = transactions.map((transaction) => {
            return transaction;
        })
        this.setState({transactions: transactions});

        let transactionColumns = transactions.length ? Object.keys(transactions[0]) : [];
        this.setState({transactionColumns: transactionColumns});
    }

    initializeFilter = () => {
        let columns = this.state.transactionColumns;

        let filter = {};
        columns.map((column) => {
            filter[column.toUpperCase()] = "";
        });

        this.setState({filters: filter});
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

    applyFilter = (filterName, filterArgument, filterValue) => {
        let filters = this.state.filters;

        let filterNameExists = Object.keys(filters).includes(filterName);
        if (filterNameExists) {

            let addingNewFilter = (filterArgument.length && filterValue.length);

            if (addingNewFilter) {
                filters[filterName] = filterArgument + filterValue;
            } else {
                filters[filterName] = "";
            }
        }

        this.setState({filters: filters});
        this.getTransactions(filters);
    }

    render() {

        let spreadsheet = <Spreadsheet data={this.state.transactions} sortBy={this.sortBy}/>;

        let filterButton = <Button title="Filter" onClick={() => {this.setState({showFilter: !this.state.showFilter})}} />;
        let transactionFilter = this.state.showFilter ? <Filter filters={this.state.filters} applyFilter={this.applyFilter} data={this.state.transactions}/> : "";

        let transactionSummary = "";//<Summary />;

        return(
            <div className="finances">
                <p>Spending History</p>
                <div className="spreadsheet-header">
                    {filterButton}
                    {transactionFilter}
                    {transactionSummary}
                </div>
                {spreadsheet}
            </div>
        );
    }
}

export default SpendingService;