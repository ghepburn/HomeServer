import axios from "axios";
import Client from "../utils/Client";

class FinanceClient extends Client {

    async getTransactions() {
        console.log("FinanceClient getTransations");
        let transactions = await this.get("/transactions");
        console.log(transactions);
        return transactions;
    }
}

export default FinanceClient;