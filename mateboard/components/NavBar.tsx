/** @jsx h */
import { h } from "preact";
import { asset } from "$fresh/runtime.ts";
import { useEffect, useState } from "preact/hooks";

export default function NavBar(
  {
    title,
    sections,
  }: {
    title: string;
    sections: Record<string, Element>;
  },
) {
  console.assert(Object.keys(sections).length > 0);
  console.assert("default" in sections);
  const [view, setView] = useState("default");

  return (
    <div>
      <nav class="navbar fixed-top navbar-expand-lg bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" onClick={()=>setView("default")}>
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
              {Object.keys(sections).filter(x=>x !== "default").map((section) => (
                <li class="nav-item">
                  <a
                    class={`nav-link ${
                      section === view && "active"
                    }`}
                    aria-current="page"
										onClick={() => setView(section)}
                  >
                    {section}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
			<div style={{marginTop:"10vh"}}></div>
      {sections[view]}
    </div>
  );
}
