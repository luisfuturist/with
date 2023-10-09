import "@unocss/reset/tailwind.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import ReactDOM from "react-dom/client";
import "virtual:uno.css";
import type { PageContextClient } from "./App";
import App from "./App";
import "./global.css";
import onHead from "./onHead";
import "./print.css";

let root: ReactDOM.Root;

export default async (pageContext: PageContextClient) => {
  /* const { Page, pageProps } = pageContext;
  if (!Page)
    throw new Error(
      "Client-side render() hook expects pageContext.Page to be defined"
    ); */

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
