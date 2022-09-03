/** @jsx h */
import { h } from "preact";
import { Experiment } from "./Interfaces.ts";

export default ({ experiment }: { experiment: Experiment }) => {
  console.log(experiment);
  return (
    <div style={{ textAlign: "center", width: "100%" }}>
      <div
        class="card"
        style={{
          padding: "5px",
          "width": "25rem",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <button
          type="button"
          class="btn btn-danger btn-lg btn-block"
          disabled={experiment.status !== "running"}
					style={{ marginBottom: "5px" }}
        >
          Stop
        </button>
        <button
          type="button"
          class="btn btn-primary btn-lg btn-block"
          disabled={experiment.status === "running"}
					style={{ marginBottom: "5px" }}
        >
          Train
        </button>
        <button
          type="button"
          class="btn btn-primary btn-lg btn-block"
          disabled={experiment.status === "running" ||
            experiment.status === "never-run"}
					style={{ marginBottom: "5px" }}
        >
          Test
        </button>
      </div>
    </div>
  );
};
