/** @jsx h */
import { h } from "preact";
import { useEffect, useState } from "preact/hooks";
import { asset } from "$fresh/runtime.ts";

import NavBar from "../components/NavBar.tsx";
import Config from "../components/Config.tsx";
import Training from "../components/Training.tsx";
import Visualizations from "../components/Visualizations.tsx";
import NavBar from "../components/NavBar.tsx";
import { MateSummary } from "../components/Interfaces.ts";

type View = "default" | "Config" | "Training" | "Visualizations";

const App = () => {
  const [mateSummary, setMateSummary] = useState(
    { experiments: [] } as unknown as MateSummary,
  );
  const [view, setView] = useState("" as View);
  const experiments = mateSummary.experiments;
  const namedSections = {
    "default": <ExperimentsOverview experiments={experiments} />,
    "Config": <Config />,
    "Training": <Training />,
    "Visualizations": <Visualizations />,
  } as Record<View, Element>;

  useEffect(() => {
    fetch(`mate_summary.json`)
      .then((res) => res.json())
      .then((data) => setMateSummary(data));
  }, [1]);
  return (
    <div>
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx"
        crossOrigin="anonymous"
      />

      <link rel="stylesheet" href={asset("App.css")} />
      <div class="App">
        <NavBar
          title="MateBoard"
          sections={namedSections}
        />
      </div>
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa"
        crossOrigin="anonymous"
      >
      </script>
    </div>
  );
};

export default App;
