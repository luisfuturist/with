import ReactDOMServer from "react-dom/server";
import { dangerouslySkipEscape, escapeInject } from "vike/server";
import App, { type PageContextServer } from "./App";
import onHead from "./onHead";
import logoUrl from "/fav-light.png";

export default async (pageContext: PageContextServer) => {
  const app = App(pageContext);
  const appHtml = app ? ReactDOMServer.renderToString(app) : "";

  const { title, desc, keywords } = onHead(pageContext);

  return escapeInject`<!DOCTYPE html>
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
        <div id="react-root">${dangerouslySkipEscape(appHtml)}</div>
      </body>
    </html>`;
};
