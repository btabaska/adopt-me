import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
  return (
    <div>
      <h1 id="something importent">Adopt Me!</h1>
      <Pet name="Luna" animal="dog" breed="havanese" />
      <Pet name="Pepper" animal="Bird" breed="Cocatiel" />
      <Pet name="Doink" animal="cat" breed="mixed" />
    </div>
  );
};
render(React.createElement(App), document.getElementById("root"));
