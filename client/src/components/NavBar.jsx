import { Link } from "react-router-dom";
import "./componentStyle/navBar.css";
import { useAuth } from "../contexto/AuthContext";
import { BiUserCircle } from "react-icons/bi";

function navBar() {
  const { isAuthenticated, logout, user } = useAuth();

  return (
    <div className="navBarContainer">
      <nav className={isAuthenticated ? 'navBarUser':'navBar'}>
        <div className="iconNavContainer">
        <Link to="/" className={isAuthenticated ? 'iconNavUser':'iconNav'}>
          {isAuthenticated ? (user.username):(<BiUserCircle />)}
        </Link>
        </div>
        <ul className="item">
          {isAuthenticated ? (
            <>
               <li >
                <Link to="/portfolio">Portfolio</Link>
              </li>
              <li>
                <Link to="/project">Proyects</Link>
              </li>
              <li>
                <Link to="/" onClick={() => {
                  logout()
                }}>Logout</Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/portfolio">Portfolio</Link>
              </li>
              <li >
                <Link to="/contacto">Contacto</Link>
              </li>
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
