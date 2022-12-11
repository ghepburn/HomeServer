import axios from "axios";
import Client from "../utils/Client";

class FinanceClient extends Client {

    async getTransactions(args) {
        let params = "";
        for (let key in Object.keys(args)) {
            let param = "?" + key + "=" + args[key];
            params.append(param)
        }

        let transactions = await this.get("/transactions"+params);
        return transactions;
    }

    // async getTransactionTypes() {
    //     console.log("FinanceClient getTransactionTypes");
    //     let transactionTypes = await this.get("/transactions/types");
    //     console.log(transactionTypes);
    //     return transactionTypes;
    // }

    // async getTransactionCategories() {
    //     console.log("FinanceClient getTransactionCategories");
    //     let transactionCategories = await this.get("/transactions/categories");
    //     console.log(transactionCategories);
    //     return transactionCategories;
    // }

    // async getTransactionSources() {
    //     console.log("FinanceClient getTransactionSources");
    //     let transactionSources = await this.get("/transactions/sources");
    //     console.log(transactionSources);
    //     return transactionSources;
    // }
}

export default FinanceClient;