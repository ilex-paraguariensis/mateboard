/** @jsx h */
import { h } from "preact";
import { useEffect, useState } from "preact/hooks";

import NavBar from "../components/NavBar.tsx";
import Config from "../components/Config.tsx";
import Training from "../components/Training.tsx";
import Visualizations from "../components/Visualizations.tsx";
import ExperimentControl from "../components/ExperimentControl.tsx";
import { MateSummary } from "../components/Interfaces.ts";

type View = "default" | "Config" | "Training" | "Visualizations";
export default ({ experimentId }: { experimentId: string }) => {
  const [mateSummary, setMateSummary] = useState(
    { experiments: [] } as unknown as MateSummary,
  );
  const [view, setView] = useState("" as View);
  const experiment =
    mateSummary.experiments.filter((e) => e.id === experimentId)[0];
  // const namedSections =  as Record<View, Element>;
  console.log(mateSummary);
  useEffect(() => {
    fetch(`../mate_summary.json`)
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .then((data) => {
        console.log("hoy" + data);
        setMateSummary(data);
      });
  }, []);
  const defaultSections = {
    "default": <ExperimentControl experiment={experiment} />,
    "Config": <Config />,
    "Training": <Training />,
    "Visualizations": <Visualizations />,
  } as Record<View, h.JSX.Element>;
  return (
    <div>
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx"
        crossOrigin="anonymous"
      />
      <div class="App">
        {mateSummary.experiments.length > 0 && (
          <NavBar
            title="MateBoard"
            defaultSections={defaultSections}
          />
        )}
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
