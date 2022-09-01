/** @jsx h */
import { h } from "preact";
import { Experiment } from "./Interfaces.ts";
// imports the CSS file called ExperimentOverview.css
// import "./ExperimentOverview.css";
import { asset } from "$fresh/runtime.ts";

function Status(
  { statusValue }: { statusValue: "running" | "run" | "never-run" },
) {
  if (statusValue === "running") {
    return (
      <div class="input-group mb-3">
        <input
          type="text"
          class="form-control"
          value="Status:"
          disabled
          aria-label="Text input with checkbox"
        />
        <input
          type="text"
          class="form-control"
          value="running"
          disabled
          aria-label="Text input with checkbox"
        />
        <div
          class="input-group-text"
          style={{ padding: 0, margin: 0, textAlign: "center" }}
        >
          <div
            style={{
              transform: "scale(0.5)",
              margin: 0,
              padding: 0,
              maxHeight: "20px",
              maxWidth: "50px",
              textAlign: "center",
            }}
          >
            <div
              style={{ margin: 0, padding: 0 }}
              class="loader"
            >
            </div>
          </div>
        </div>
      </div>
    );
  } else if (statusValue === "run") {
    return (
      <div class="input-group mb-3">
        <input
          type="text"
          class="form-control"
          value="Status:"
          disabled
          aria-label="Text input with checkbox"
        />
        <input
          type="text"
          class="form-control"
          value="run"
          disabled
          aria-label="Text input with checkbox"
        />
        <div class="input-group-text">
          <input
            style={{ backgroundColor: "green" }}
            disabled
            class="form-check-input mt-0"
            checked
            type="checkbox"
            value=""
            aria-label="Checkbox for following text input"
          />
        </div>
      </div>
    );
  } else if (statusValue === "never-run") {
    return (
      <div class="input-group mb-3">
        <input
          type="text"
          class="form-control"
          value="Status:"
          disabled
          aria-label="Text input with checkbox"
        />
        <input
          type="text"
          class="form-control"
          value="never run"
          disabled
          aria-label="Text input with checkbox"
        />
        <div class="input-group-text">
          <input
            style={{ backgroundColor: "white" }}
            disabled
            class="form-check-input mt-0"
            type="checkbox"
            value=""
            aria-label="Checkbox for following text input"
          />
        </div>
      </div>
    );
  } else {
    return <div>hey</div>;
  }
}
export default function ExperimentOverview(
  { experiments }: { experiments: Experiment[] },
) {
  return (
    <div style={{ textAlign: "center", marginTop: "10vh" }}>
      <link rel="stylesheet" href={asset("ExperimentOverview.css")} />
      {experiments.map((experiment) => (
        <div onClick={()=>location.href=`experiments/${experiment.name}`}
          class="card"
          style={{
            "width": "25rem",
            "display": "block",
            "marginLeft": "auto",
            "marginRight": "auto",
          }}
        >
          <div class="card-body">
            <h5 class="card-title">{experiment.name}</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <Status statusValue={experiment.status} />
          </div>
        </div>
      ))}
    </div>
  );
}
