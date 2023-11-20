import {StrictMode} from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "remixicon/fonts/remixicon.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Routers from "./routers/Routers";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
      <Routers />
  </StrictMode>
);
