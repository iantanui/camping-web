import React from "react";
import "./Home.css";
import Header from "./Header";
import Main from "./Main";

function Home() {
  return (
    <div className="home-page">
      <header className="header">
        {/* Header content here */}
        <Header />
      </header>
      <main className="main-content">
        {/* Main content here */}
        <Main />
      </main>
    </div>
  );
}

export default Home;
