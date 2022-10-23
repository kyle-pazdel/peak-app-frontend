import axios from "axios";
import { useState, useEffect } from "react";
import { Modal } from "./Modal";
import { PeaksIndex } from "./PeaksIndex";
import { PeaksShow } from "./PeaksShow";

export function Home() {
  const [peaks, setPeaks] = useState([]);
  const [isPeakVisible, setIsPeakVisible] = useState(false);
  const [currentPeak, setCurrentPeak] = useState({});

  const handleIndexPeaks = () => {
    axios.get("http://localhost:3000/peaks.json").then((response) => {
      console.log(response.data);
      setPeaks(response.data);
    });
  };

  const handleShowPeak = (peak) => {
    setIsPeakVisible(true);
    setCurrentPeak(peak);
  };

  const handleHidePeak = () => {
    setIsPeakVisible(false);
  };

  useEffect(handleIndexPeaks, []);

  return (
    <div>
      <PeaksIndex peaks={peaks} onSelect={handleShowPeak} />
      <Modal>
        <PeaksShow />
        <p>TEST</p>
      </Modal>
      <div id="peaks-new">
        <h1>New Peak</h1>
      </div>
    </div>
  );
}
