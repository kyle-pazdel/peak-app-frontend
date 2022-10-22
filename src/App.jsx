import { useState } from "react";
import { useEffect } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Header } from "./Header";
import { Footer } from "./Footer";

function App() {
  return (
    <div>
      <Header />
      <div id="peaks-new">
        <h1>New post</h1>
      </div>

      <div id="peaks-index">
        <h1>All posts</h1>
      </div>
      <Footer />
    </div>
  );
}

export default App;
