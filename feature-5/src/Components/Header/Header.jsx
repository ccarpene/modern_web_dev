import { Link, useNavigate } from "react-router-dom";
import { logoutUser } from "../Auth/AuthService";
import './Header.css';

const Header = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        if (logoutUser()) {
            alert(`You have logged out. Goodbye!`);
            navigate("/auth");
        }
    };

    return (
        <div>
            <div className="top">
                <h1 className="title">Welcome to South Bend: A Local's Guide</h1>
                <button onClick={handleLogout} className="logout-button">Logout</button>
            </div>

            {/* Navigation with React Router */}
            <ul className="navigation">
                <li>
                <Link to="/eat">Where to Eat</Link>
                </li>
                <li>
                <Link to="/activities">What to Do</Link>
                </li>
                <li>
                <Link to="/stay">Where to Stay</Link>
                </li>
            </ul>
        </div> 
    );
};

export default Header;