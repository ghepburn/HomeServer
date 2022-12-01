import Service from "../utils/Service";

import Spreadsheet from "./dataStructures/Spreadsheet";
import FinanceClient from "./FinanceClient";

class FinanceService extends Service {
    subServices = [
        "Savings",
        "Spending",
        "Mortgage"
    ];
}

export default FinanceService;