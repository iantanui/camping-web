import React from "react";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <a href="/">Camping</a>
      </div>

      <nav className="nav">
        <a href="/">Home</a>
        <a href="/pricing">Pricing</a>
        <a href="/events">Events</a>
        <a href="/contact">Contact</a>
      </nav>
      <div className="user-actions">
        <a href="/login">Login</a>
        <button className="get-started-button">Get Started</button>
      </div>
    </header>
  );
}

export default Header;
