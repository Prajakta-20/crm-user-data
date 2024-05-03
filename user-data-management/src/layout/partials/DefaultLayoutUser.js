import React from "react";
// import { Footer } from "./partials/Footer";
// import { Header } from "./partials/Header";
// import { Sidebar } from "../components/sidebar/Sidebar";
// import { Sidebar } from "../../components/sidebar/Sidebar";
import { SidebarUser } from "../../components/sidebar/SidebarUser";
import { HeaderUser } from "./HeaderUser";
import { Footer } from "./Footer";

export const DefaultLayoutUser = ({ children }) => {
  return (
    // <div>
    <div className="default-layout">
      <header className="header">
        <HeaderUser />
      </header>

      <main className="main">
        <div className="sidebar-container">
          <SidebarUser />
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
