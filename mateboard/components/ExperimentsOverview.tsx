/** @jsx h */
import { h } from "preact";
import { Experiment } from "./Interfaces.ts";
// imports the CSS file called ExperimentOverview.css
// import "./ExperimentOverview.css";
import { asset } from "$fresh/runtime.ts";

import Config from "../components/Config.tsx";
import Training from "../components/Training.tsx";
import Visualizations from "../components/Visualizations.tsx";
import ExperimentControl from "../components/ExperimentControl.tsx";

function Status(
  { statusValue }: { statusValue: "running" | "run" | "never-run" },
) {
  const status = {
    "running": (
      <div style={{ textAlign: "right", padding: 0 }}>
        <div
          style={{
            transform: "scale(0.5)",
            margin: 0,
            padding: 0,
            maxHeight: "20px",
            width: "100%",
            textAlign: "right",
          }}
        >
          <div
            style={{
              textAlign: "right",
              transform: "scale(0.5)",
              marginTop: -13,
              marginLeft: 0,
              marginRight: -45,
              padding: 0,
              backgroundColor: "white",
              border: "3px solid black",
            }}
            class="loader"
          >
          </div>
        </div>
      </div>
    ),
    "run": (
      <div style={{ textAlign: "right" }}>
        <input
          class="form-check-input mt-0"
          style={{
            width: "25px",
            height: "25px",
            backgroundColor: "green",
            borderRadius: "50%",
            border: "2px solid black",
          }}
          checked
          type="checkbox"
          onClick={() => {}}
          value=""
          aria-label="Checkbox for following text input"
        />
      </div>
    ),
    "never-run": (
      <div style={{ textAlign: "right" }}>
        <input
          style={{
            width: "25px",
            height: "25px",
            borderRadius: "50%",
            backgroundColor: "white",
            border: "2px solid black",
          }}
          disabled
          class="form-check-input mt-0"
          type="checkbox"
          value=""
          aria-label="Checkbox for following text input"
        />
      </div>
    ),
  };
  return (
    status[statusValue]
  );
}
export default function (
  { experiments, setSections, setSection }: {
    experiments: Experiment[];
    setSections: (sections: Record<string, h.JSX.Element>) => void;
    setSection: (section: string) => void;
  },
) {
  return (
    <div style={{ textAlign: "center", marginTop: "10vh" }}>
      <link rel="stylesheet" href={asset("ExperimentOverview.css")} />
      <button
        type="button"
        class="btn btn-success"
        style={{
          textAlign: "center",
          marginBottom: "10px",
          borderRadius: "50%",
          maxHeight: "43px",
          maxWidth: "43px",
        }}
        onClick={() => {}}
      >
        <span style={{ marginLeft: "auto", marginRight: "auto" }}>+</span>
      </button>

      {experiments.map((experiment) => (
        <div
          onClick={() => {
            setSections({
              "Control": <ExperimentControl experiment={experiment} />,
              "Config": <Config />,
              "Training": <Training />,
              "Visualizations": <Visualizations />,
            } as Record<string, h.JSX.Element>);
            setSection("Control");
          }}
          class="card"
          style={{
            "width": "25rem",
            "display": "block",
            "marginLeft": "auto",
            "marginRight": "auto",
            marginBottom: "5px",
            backgroundColor: "#D0FFC6",
          }}
        >
          <div class="card-body">
            <h5 class="card-title">{experiment.name}</h5>
            <p class="card-text">
              {experiment.description}
            </p>
            <table style={{ width: "100%" }}>
              <tbody>
                <tr>
                  <td style={{ textAlign: "left" }}>
                    <img
                      src="delete_icon.png"
                      style={{ height: "20px", width: "20px" }}
                    >
                    </img>
                  </td>
                  <td>
                    <Status statusValue={experiment.status} />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      ))}
    </div>
  );
}
