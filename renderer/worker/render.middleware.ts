import { Context } from "hono";
import { renderPage } from "vike/server";

export default async (c: Context) => {
  let response;

  const pageContextInit = {
    urlOriginal: c.req.url,
  };
  const pageContext = await renderPage(pageContextInit);
  const { httpResponse } = pageContext;
  if (!httpResponse) {
    response = null;
  } else {
    const { readable, writable } = new TransformStream();
    httpResponse.pipe(writable);
    response = new Response(readable);
  }

  if (response !== null) return response;
  return c.newResponse(null, 500);
};
