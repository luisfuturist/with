import { Context } from "hono";
import { renderPage } from "vike/server";

export async function handleSsr(url: string) {
  const pageContextInit = {
    urlOriginal: url,
  };
  const pageContext = await renderPage(pageContextInit);
  const { httpResponse } = pageContext;
  if (!httpResponse) {
    return null;
  } else {
    const { readable, writable } = new TransformStream();
    httpResponse.pipe(writable);
    return new Response(readable);
  }
}

export async function handleHtml(c: Context) {
  const response = await handleSsr(c.req.url);
  if (response !== null) return response;
  return c.newResponse(null, 500);
}
