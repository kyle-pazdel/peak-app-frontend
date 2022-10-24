import axios from "axios";
import { useState, useEffect } from "react";
import { Modal } from "./Modal";
import { PeaksIndex } from "./PeaksIndex";
import { PeaksNew } from "./PeaksNew";
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

  const handleCreatePeak = (params) => {
    axios.post("http://localhost:3000/peaks.json", params).then((response) => {
      const newPeak = response.data;
      setPeaks([...peaks, newPeak]);
    });
  };

  const handleUpdatePeak = (params) => {
    axios.patch("http://localhost:3000/peaks/" + currentPeak.id + ".json", params).then((response) => {
      const updatedPeak = response.data;
      setCurrentPeak(updatedPeak);
      setPeaks(
        peaks.map((peak) => {
          if (peak.id === updatedPeak.id) {
            return updatedPeak;
          } else {
            return peak;
          }
        })
      );
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
        <PeaksShow peak={currentPeak} onUpdatePeak={handleUpdatePeak} />
      </Modal>
      <PeaksNew onCreatePeak={handleCreatePeak} />
    </div>
  );
}
