import React from 'react';
import "./header.scss";

function Header() {
  return (
    
      <header className="header" >
        <div className="header-btn">
            <button className="header-btn-create">
                <svg
                className="header-btn-img"
                width="36"
                height="36"
                viewBox="0 0 36 36"
                >
                <path fill="#34A853" d="M16 16v14h4V20z"></path>
                <path fill="#4285F4" d="M30 16H20l-4 4h14z"></path>
                <path fill="#FBBC05" d="M6 16v4h10l4-4z"></path>
                <path fill="#EA4335" d="M20 16V6h-4v14z"></path>
                <path fill="none" d="M0 0h36v36H0z"></path>
                </svg>
                <div className="header-btn-title">
                    Create
                </div>
            </button>
            <button className="header-btn-today">
                Today
            </button>
        </div>
        <div className="header-nav">
            <button className="header-nav-btn">
                <i className="fas fa-angle-left"></i>
            </button>
            <button className="header-nav-btn">
                <i className="fas fa-angle-right"></i>
            </button>
        </div>
        <div className="header-date-container">
            <div className="header-date">
                Aug
            </div>
            <div className="header-date">
                2020
            </div>
        </div>
      </header>
    
  );
}

export default Header;
