import React from "react";
import { render } from "react-dom";
import "./semantic-ui/semantic.min.css";
import "./index.css";

import Ten from "./10-remote-persist.js";
import Eleven from "./11-redux-app.js";

const routes = [Ten, Eleven];

const location = window.location;
window.addEventListener("hashchange", location.reload.bind(location));
const loc = location.hash.replace("#/", "");
const element = loc ? createRoute(loc) : createTOC();

const container = document.createElement("div");
document.body.appendChild(container);

render(element, container);

function createTOC() {
  return (
    <div className="ui container">
      <h1>React Forms</h1>
      <ul className="ui list">
        {routes.map((route, i) => (
          <li key={i}>
            <a href={`#/${i + 1}`}>{route.displayName}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function createRoute(nStr) {
  let i = nStr - 1;
  if (i < 0) i = 0;
  if (i > routes.length - 1) i = routes.length - 1;

  const navStyle = {
    position: "fixed",
    bottom: 50,
    textAlign: "center",
    left: "10%"
  };
  const isFirst = i <= 0;
  const isLast = i >= routes.length - 1;

  return (
    <div className="ui container">
      {React.createElement(routes[i])}
      <div style={navStyle} className="ui fluid three item pagination menu">
        {isFirst ? (
          ""
        ) : (
          <a href={`#/${i}`} className="item">
            {"<"}
          </a>
        )}
        <a href={location.href.replace(location.hash, "")} className="item">
          TOC
        </a>
        {isLast ? (
          ""
        ) : (
          <a href={`#/${i + 2}`} className="item">
            {" > "}
          </a>
        )}
      </div>
    </div>
  );
}
