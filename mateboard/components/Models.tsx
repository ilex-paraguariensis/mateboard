/** @jsx h */
import { h } from "preact";

import { Package } from "./Interfaces.ts";

export default function (
  { models }: {
    models: Package[];
  },
) {
  const installNewModel = () => {
    Swal.fire({
      title: "Enter Git URL",
      input: "text",
      inputAttributes: {
        autocapitalize: "off",
      },
      showCancelButton: true,
      confirmButtonText: "Install",
      showLoaderOnConfirm: true,
      preConfirm: (login) => {
      },
      allowOutsideClick: () => !Swal.isLoading(),
    }).then((result) => {
      if (result.isConfirmed) {
      }
    });
  };
  return (
    <div style={{ textAlign: "center", marginTop: "10vh" }}>
      <div style={{ textAlign: "center", width: "100%" }}>
        <button
          type="button"
          class="btn btn-success"
          onClick={installNewModel}
          style={{
            textAlign: "center",
            marginBottom: "10px",
            borderRadius: "50%",
            maxHeight: "43px",
            maxWidth: "43px",
          }}
        >
          <span style={{ marginLeft: "auto", marginRight: "auto" }}>+</span>
        </button>
      </div>
      {models.map((model) => (
        <div
          class="card"
          style={{
            width: "25rem",
            display: "block",
            marginLeft: "auto",
            marginRight: "auto",
            marginBottom: "5px",
            backgroundColor: "#D0FFC6",
          }}
        >
          <div class="card-body">
            <h5 class="card-title">{model.name}</h5>
            <p class="card-text">
              {model.description}
            </p>
            <a style={{ fontSize: "15px" }} href={model.source} target="_blank">
              {model.source}
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
