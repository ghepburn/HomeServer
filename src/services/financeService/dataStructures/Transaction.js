import Row from "../../utils/Row";

const Transaction = (props) => {

    let columns = props.columns;
    let data = props.data;

    let transactionData = columns.map((col) => {
        let value = data[col] ? data[col] : "null";
        return value
    });

    let transaction = <Row data={transactionData} />;

    return(
        <div className="transaction">
            {transaction}
        </div>
    );
}

export default Transaction;