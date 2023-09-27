import type {
  PageContextBuiltInServer,
  PageContextBuiltInClientWithClientRouting as PageContextBuiltInClient,
} from "vike/types";

export type Page = (pageProps: PageProps) => React.ReactElement;
export type PageProps = Record<string, unknown>;

export type PageContextCustom = {
  Page: Page;
  pageProps?: PageProps;
  urlPathname: string;
  exports: {
    meta?: {
      title?: string;
      description?: string;
      keywords: string;
    };
  };
};

export type PageContextServer = PageContextBuiltInServer<Page> &
  PageContextCustom;
export type PageContextClient = PageContextBuiltInClient<Page> &
  PageContextCustom;

export type PageContext = PageContextClient | PageContextServer;

export function getMeta(pageContext: PageContext) {
  const { meta } = pageContext.exports;
  const title = meta?.title || "With";
  const desc =
    meta?.description ||
    "Aulas online e particular de Inglês Básico para adultos.";
  const keywords =
    meta?.keywords || "English, Inglês, tutor, básico, aula, aprender, começar";

  return { title, desc, keywords };
}
