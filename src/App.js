import LiveMarkdown from "./components/live-markdown";
import Navbar from "./components/navbar";
import "./App.css";
import React from "react";
import { Helmet } from "react-helmet";

function App() {
  return (
    <main>
      <Helmet>
        <script
          src="https://kit.fontawesome.com/05168aa044.js"
          crossOrigin="anonymous"
        ></script>
      </Helmet>
      <div className="overflow-y-auto">
        <Navbar />
        <LiveMarkdown />
      </div>
    </main>
  );
}

export default App;
