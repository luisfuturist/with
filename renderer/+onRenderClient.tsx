import "@unocss/reset/tailwind.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import ReactDOM from "react-dom/client";
import "virtual:uno.css";
import type { PageContextClient } from "./App";
import App from "./App";
import "./css/global.css";
import "./css/print.css";
import "./css/prose.css";
import onHead from "./onHead";

let root: ReactDOM.Root;

export default async (pageContext: PageContextClient) => {
  const container = document.getElementById("react-root");
  if (!container) throw new Error("DOM element #react-root not found");

  const app = App(pageContext);

  if (pageContext.isHydration) {
    root = ReactDOM.hydrateRoot(container, app);
  } else {
    if (!container) {
      root = ReactDOM.createRoot(container);
    }
    root.render(app);
  }

  const { title } = onHead(pageContext);
  document.title = title;
};
