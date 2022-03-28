import React from 'react';
import { AiOutlineMenu, AiOutlineSearch } from 'react-icons/ai';
import styles from 'styles/components/Navbar.module.scss';

function Navbar({ setSidebarOpen, sidebarOpen }) {
  return (
    <nav className={`navbar navbar-expand-lg ${styles.navbar}`}>
      <div className="container d-flex align-items-center">
        <a href="#" className="navbar-brand text-light">
          <img src="/img/logo.png" alt="" />
        </a>
        <ul className="nav ms-auto">
          <li
            className="nav-item mt-1"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            <AiOutlineMenu style={{ fontSize: '1.5rem' }} />
          </li>

          <li className="nav-item ms-3">
            <div className="input-group input-group-sm">
              <input
                type="text"
                className="form-control"
                aria-label="Small"
                aria-describedby="inputGroup-sizing-sm"
              />
              <div className="input-group-prepend">
                <span className="input-group-text" id="inputGroup-sizing-sm">
                  <AiOutlineSearch />
                </span>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
