import { PeaksIndex } from "./PeaksIndex";

export function Home() {
  return (
    <div>
      <PeaksIndex />
      <div id="peaks-new">
        <h1>New Peak</h1>
      </div>
    </div>
  );
}
