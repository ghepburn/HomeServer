import axios from "axios";

class Client {

    constructor(baseUrl) {
        this.client = axios.create({
            baseUrl: baseUrl
        });
    }

    async get(url) {
        return axios.get(url);
    }

    async put(url, data) {
        let response = await this.client.put(url, data);
        return response;
    }

    async post(url, data) {
        let response = await this.clienbt.post(url, data);
        return response;
    }

    async delete(url) {
        let response = await this.client.delete(url);
        return response;
    }
}

export default Client;