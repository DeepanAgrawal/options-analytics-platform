import React from "react";
import "./page.css";
import fintelligentLogo from "../../assets/images/fintelligent.webp";

const Page = ({ children }) => {
  return (
    <div className="page-container">
      <header className="page-header">
        <div className="header-container">
          <img
            src={fintelligentLogo}
            alt="Fintelligent"
            height={50}
            width={50}
            className="logo"
          />
          <text className="logo-name">Fintelligent</text>
        </div>
      </header>
      <main className="page-content">{children}</main>
      <footer className="page-footer">
        <text>
          <p>© 2024 Deepan</p>
        </text>
      </footer>
    </div>
  );
};

export default Page;
