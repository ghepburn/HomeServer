import axios from "axios";

class Client {

    headers = {
        "Access-Control-Allow-Origin": "*" 
    };

    constructor(baseUrl) {
        this.client = axios.create({
            baseURL: baseUrl,
            headers: this.headers
        });
    }

    get(url) {
        try {
            let transactions = this.client.get(url)
            .then((transactions)=> {
                return transactions.data;
            })
            return transactions;
        } catch(error) {
            console.log("GET ERROR:")
            console.error(error);
        }
    }

    async put(url, data) {
        try {
            let response = await this.client.put(url, data);
            return response;
        } catch(error) {
            console.error(error)
        }
    }

    async post(url, data) {
        try {
            let response = await this.client.post(url, data);
            return response;
        } catch(error) {
            console.error(error)
        }
    }

    async delete(url) {
        try {
            let response = await this.client.delete(url);
            return response;
        } catch(error) {
            console.error(error)
        }
    }
}

export default Client;