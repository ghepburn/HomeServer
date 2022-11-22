import axios from "axios";
import Client from "../utils/Client";

class FinanceClient extends Client {

    async getTransactions() {
        return await this.get("127.0.0.1:5000/transactions");
    }
}

export default FinanceClient;