import { Link } from "react-router-dom";
import './Header.css'

const Header = () => (
    <div>
        <h1 className="title">Welcome to South Bend: A Local's Guide</h1>
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

export default Header;