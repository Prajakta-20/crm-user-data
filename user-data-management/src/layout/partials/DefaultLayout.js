import React from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Sidebar } from "../../components/sidebar/Sidebar";

export const DefaultLayout = ({ children }) => {
  return (
    // <div>
    <div className="default-layout">
      <header className="header">
        <Header />
      </header>

      <main className="main">
        <div className="sidebar-container">
          <Sidebar />
        </div>
        <div className="content-container mx-4">{children}</div>
      </main>

      <footer className="footer fixed-bottom">
        <Footer />
      </footer>
    </div>
    // </div>
  );
};
