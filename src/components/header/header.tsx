import './header.css';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header>
            <ul className="header-nav">
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/login">Log In</Link></li>
                <li><Link to="/signup">Sign Up</Link></li>
            </ul>
        </header>
    );
}

export default Header;
