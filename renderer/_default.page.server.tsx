import ReactDOMServer from "react-dom/server";
import { PageShell } from "./PageShell";
import { escapeInject, dangerouslySkipEscape } from "vike/server";
import logoUrl from "/fav-light.png";
import type { PageContextServer } from "./app";
import { getMeta } from "./app";

export const passToClient = ["pageProps", "routeParams"];

export async function render(pageContext: PageContextServer) {
  const { Page, pageProps } = pageContext;

  if (!Page)
    throw new Error("My render() hook expects pageContext.Page to be defined");

  const pageHtml = ReactDOMServer.renderToString(
    <PageShell pageContext={pageContext}>
      <Page {...pageProps} />
    </PageShell>
  );

  const { title, desc, keywords } = getMeta(pageContext);

  const documentHtml = escapeInject`<!DOCTYPE html>
    <html lang="pt">
      <head>
        <meta charset="UTF-8" />
        <link rel="icon" href="${logoUrl}" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="${desc}" />
        <meta name="keywords" content="${keywords}">
        <title>${title}</title>
      </head>
      <body>
        <div id="react-root">${dangerouslySkipEscape(pageHtml)}</div>
      </body>
    </html>`;

  return {
    documentHtml,
    pageContext: {},
  };
}
