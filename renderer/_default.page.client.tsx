import ReactDOM from "react-dom/client";
import { PageShell } from "./PageShell";
import type { PageContextClient } from "./app";
import { getMeta } from "./app";

export const clientRouting = true;
export const hydrationCanBeAborted = true;
export const prefetchStaticAssets = window.matchMedia("(any-hover: none)")
  .matches
  ? "viewport"
  : "hover";

let root: ReactDOM.Root;

export async function render(pageContext: PageContextClient) {
  const { Page, pageProps } = pageContext;
  if (!Page)
    throw new Error(
      "Client-side render() hook expects pageContext.Page to be defined"
    );
  const container = document.getElementById("react-root");
  if (!container) throw new Error("DOM element #react-root not found");

  const page = (
    <PageShell pageContext={pageContext}>
      <Page {...pageProps} />
    </PageShell>
  );

  if (pageContext.isHydration) {
    root = ReactDOM.hydrateRoot(container, page);
  } else {
    if (!container) {
      root = ReactDOM.createRoot(container);
    }
    root.render(page);
  }
  const { title } = getMeta(pageContext);

  document.title = title;
}

export function onPageTransitionStart(pageContext: PageContextClient) {
  document.body.classList.add("route-transition");
  pageContext.isBackwardNavigation &&
    document.body.classList.add("is-backward-navigation");
}
export function onPageTransitionEnd(pageContext: PageContextClient) {
  document.body.classList.remove("route-transition");
}

export function onHydrationEnd() {
  document.body.classList.remove("is-hydrating");
}
