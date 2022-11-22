import { Link } from "react-router-dom";

const Navbar = () => {
    return(
        <div className="navbar">
            <Link to="/">
                <img className="navbar-img" src="https://freesvg.org/img/1410828243.png" />
            </Link>
        </div>
    );
}

export default Navbar;