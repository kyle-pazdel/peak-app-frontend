import axios from "axios";
import { useState, useEffect } from "react";
import { PeaksIndex } from "./PeaksIndex";

export function Home() {
  const [peaks, setPeaks] = useState([]);

  const handleIndexPeaks = () => {
    axios.get("http://localhost:3000/peaks.json").then((response) => {
      console.log(response.data);
      setPeaks(response.data);
    });
  };

  useEffect(handleIndexPeaks, []);

  return (
    <div>
      <PeaksIndex peaks={peaks} />
      <div id="peaks-new">
        <h1>New Peak</h1>
      </div>
    </div>
  );
}
