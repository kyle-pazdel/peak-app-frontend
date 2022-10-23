import axios from "axios";
import { useState, useEffect } from "react";
import { Modal } from "./Modal";
import { PeaksIndex } from "./PeaksIndex";
import { PeaksShow } from "./PeaksShow";

export function Home() {
  const [peaks, setPeaks] = useState([]);
  const [isPeakShowVisible, setIsPeakShowVisible] = useState(false);
  const [currentPeak, setCurrentPeak] = useState({});

  const handleIndexPeaks = () => {
    axios.get("http://localhost:3000/peaks.json").then((response) => {
      console.log(response.data);
      setPeaks(response.data);
    });
  };

  const handleShowPeak = (peak) => {
    setIsPeakShowVisible(true);
    setCurrentPeak(peak);
  };

  const handleHidePeak = () => {
    setIsPeakShowVisible(false);
  };

  useEffect(handleIndexPeaks, []);

  return (
    <div>
      <PeaksIndex peaks={peaks} onSelectPeak={handleShowPeak} />
      <Modal show={isPeakShowVisible} onClose={handleHidePeak}>
        <PeaksShow peak={currentPeak} />
      </Modal>
      <div id="peaks-new">
        <h1>New Peak</h1>
      </div>
    </div>
  );
}
