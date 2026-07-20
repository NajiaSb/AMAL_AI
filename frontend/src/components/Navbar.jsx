import { Link } from "react-router-dom";


function Navbar() {
    return (
        <nav>
            <h2>
                AMAL AI
            </h2>

            <div>
                <Link to="/">
                    Home
                </Link>

                <Link to="/chat">
                    Chat
                </Link>

                <Link to="/about">
                    About Us
                </Link>

                <Link to="/contact">
                    Contact Us
                </Link>
            </div>
        </nav>
    );
}

export default Navbar;