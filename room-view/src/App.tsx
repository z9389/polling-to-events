import { Log } from "./components/Log";
import { usePolling } from "./hooks/use-polling";
import { fetchLayouts } from "./services/layouts";
import { fetchSources } from "./services/sources";

function App() {
  const sourceEntries = usePolling("/sources", fetchSources);
  const layoutEntries = usePolling("/layouts", fetchLayouts);

  return (
    <div>
      <h1>polling to events</h1>
      <div
        style={{
          display: "flex",
          gap: "1",
          flexWrap: "nowrap",
        }}
      >
        <div>
          <h2>/sources</h2>
          <Log entries={sourceEntries} />
        </div>
        <div>
          <h2>/layouts</h2>
          <Log entries={layoutEntries} />
        </div>
      </div>
    </div>
  );
}

export default App;
