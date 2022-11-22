import { Link } from "react-router-dom";

const Home = () => {
    return(
        <div className="home">
            <img src="https://freesvg.org/img/1410828243.png" className="App-logo" alt="logo" />
            <p>
            The Hepburns Home Server
            </p>
            <Link className="homeButton" to="/dashboard" >Let's Go!</Link>
        </div>
    );
}

export default Home;