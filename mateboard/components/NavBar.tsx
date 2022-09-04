/** @jsx h */
import { h } from "preact";
import { asset } from "$fresh/runtime.ts";
import { useEffect, useState } from "preact/hooks";

export default function NavBar(
  {
    title,
    sections,
    defaultSections,
    defaultSection,
    setSections,
    setSection,
    section,
  }: {
    title: string;
    sections: Record<string, h.JSX.Element>;
    defaultSections: Record<string, h.JSX.Element>;
    defaultSection: h.JSX.Element;
    setSections: (sections: Record<string, h.JSX.Element>) => void;
    setSection: (section: string) => void;
    section: string;
  },
) {
  console.assert(Object.keys(sections).length > 0);
  // const [view, setView] = useState("default");
  return (
    <div>
      <nav
        class="navbar fixed-top navbar-expand-lg"
        style={{ backgroundColor: "#6AA84F" }}
      >
        <div class="container-fluid">
          <a
            class="navbar-brand"
            onClick={() => {
              setSection("default");
              setSections(defaultSections);
            }}
          >
            {title}
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              {Object.keys(sections).filter((x) => x !== "default").map((
                sectionName,
              ) => (
                <li class="nav-item">
                  <a
                    class={`nav-link ${sectionName === section && "active"}`}
                    aria-current="page"
                    onClick={() => {
                      setSection(sectionName);
                    }}
                  >
                    {sectionName}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
      <div style={{ marginTop: "10vh" }}></div>
      {section === "default" ? defaultSection : sections[section]}
    </div>
  );
}
