import axios from "axios";
import { useState, useEffect } from "react";
import { PeaksIndex } from "./PeaksIndex";

export function Home() {
  const [peaks, setPeaks] = useState([]);

  const handleIndexPeaks = () => {
    axios.get("http://localhost:3000/products.json").then((response) => {
      console.log(response.data);
    });
  };

  return (
    <div>
      <PeaksIndex />
      <div id="peaks-new">
        <h1>New Peak</h1>
      </div>
    </div>
  );
}
