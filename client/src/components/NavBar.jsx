import { Link } from "react-router-dom";
import "./componentStyle/navBar.css";
import { useAuth } from "../contexto/AuthContext";
import { BiUserCircle } from "react-icons/bi";

function navBar() {
  const { isAuthenticated, logout, user } = useAuth();

  return (
    <div className="navBarContainer">
      <nav className="navBar">
        <Link to="/" className="iconNav">
          {isAuthenticated ? (user.username):(<BiUserCircle />)}
        </Link>
        <ul className="item">
          {isAuthenticated ? (
            <>
              <li>
                <Link to="/project">View projects</Link>
              </li>
              <li>
                <Link to="/add-project">Add projects</Link>
              </li>
              <li>
                <Link to="/" onClick={() => {
                  logout()
                }}>Logout</Link>
              </li>
            </>
          ) : (
            <>
              <li >
                <Link to="/login">Login</Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </div>
  );
}

export default navBar;
