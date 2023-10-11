import { Config, ConfigEnv } from "vike/types";
import {
  onPageTransitionStart,
  onPageTransitionEnd,
  onHydrationEnd,
} from "./onPageTransition";

export default {
  clientRouting: true,
  hydrationCanBeAborted: true,
  prefetchStaticAssets: "viewport",
  passToClient: ["pageProps", "routeParams"],
  onPageTransitionStart,
  onPageTransitionEnd,
  onHydrationEnd,
  meta: {
    title: {
      env: "server-and-client",
    },
    description: {
      env: "server-only",
    },
    keywords: {
      env: "server-only",
    },
    Layout: {
      env: "server-and-client",
    },
    renderMode: {
      env: "config-only",
      effect({ configDefinedAt, configValue }) {
        let env: ConfigEnv | undefined;
        if (configValue == "HTML") env = "server-only";
        if (configValue == "SPA") env = "client-only";
        if (configValue == "SSR") env = "server-and-client";
        if (!env)
          throw new Error(
            `${configDefinedAt} should be 'SSR', 'SPA', or 'HTML'`
          );
        return {
          meta: {
            Page: { env },
          },
        };
      },
    },
  },
} satisfies Config;
