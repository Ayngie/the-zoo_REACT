import "./Navbar.scss";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/" className="link-text">
              Hem
            </Link>
          </li>
          <li>
            <Link to="/animals" className="link-text">
              Djur
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
