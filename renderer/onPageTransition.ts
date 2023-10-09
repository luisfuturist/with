import { PageContextClient } from "./App";

export function onPageTransitionStart(pageContext: PageContextClient) {
  document.body.classList.add("route-transition");
  pageContext.isBackwardNavigation &&
    document.body.classList.add("is-backward-navigation");
}
export function onPageTransitionEnd() {
  document.body.classList.remove("route-transition");
}

export function onHydrationEnd() {
  document.body.classList.remove("is-hydrating");
}
