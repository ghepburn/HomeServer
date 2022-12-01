import React from "react";
import Client from "./Client";


class SubService extends React.Component {

    getDataMethod = "getData";
    client = new Client("");

    constructor(props) {
        super(props);

        this.state = {
            data: []
        };

    }

    componentDidMount() {
        this.getData();
    }

    getData = async () => {
        
        let data = await this.client[this.getDataMethod];
        this.setState({"data": data});

        return data;
    }

    render() {

        return(
            <div className = "sub-service">
            </div>
        );
    }
}

export default SubService;