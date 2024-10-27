import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import UserContext from "../Services/AuthService";

function Header() {
  const { user } = useContext(UserContext);
  return (
    <div>
      <nav className="navbar navbar-expand-lg  bg-dark ">
        <div className="container">
          <a className="navbar-brand text-white text-bold" href="#">
            Blog
          </a>
          <button
            className="navbar-toggler text-white text-bold"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 text-white">
              <li className="nav-item">
                <Link
                  className="nav-link active text-white text-bold"
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white text-bold" to="Blogs">
                  Blog
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white text-bold" to="About">
                  About
                </Link>
              </li>
            </ul>
            <form className="d-flex gap-2" role="search">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                {user ? (
                  <>
                    <li className="nav-item">
                      <Link
                        className="nav-link text-white text-bold"
                        to="LogOutpage"
                      >
                        Log out
                      </Link>
                    </li>
                  </>
                ) : (
                  <>
                    <li className="nav-item">
                      <Link
                        className="nav-link text-white text-bold"
                        to="Login"
                      >
                        Login
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className="nav-link text-white text-bold"
                        to="Register"
                      >
                        Register
                      </Link>
                    </li>
                  </>
                )}
              </ul>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
