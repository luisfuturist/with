import type {
  PageContextBuiltInServer,
  PageContextBuiltInClientWithClientRouting as PageContextBuiltInClient,
  Config,
} from "vike/types";
import DefaultLayout from "../layouts/DefaultLayout";

export type Page = (pageProps: PageProps) => React.ReactElement;
export type PageProps = Record<string, unknown>;

export type CustomPageContext = {
  Page: Page;
  pageProps?: PageProps;
  urlPathname: string;
  config: CustomConfig;
};

export type CustomConfig = Config & {
  title?: string;
  description?: string;
  keywords?: string;
  renderMode?: "HTML" | "SSR" | "SPA";
  Layout: React.FC<any>;
};

export type PageContextServer = PageContextBuiltInServer<Page> &
  CustomPageContext;
export type PageContextClient = PageContextBuiltInClient<Page> &
  CustomPageContext;

export type PageContext = PageContextClient | PageContextServer;

export default (pageContext: PageContext) => {
  const { Page, pageProps } = pageContext;

  if(!Page) return null;

  const Layout = pageContext.config.Layout || DefaultLayout;

  return (
    <Layout pageContext={pageContext}>
      <Page {...pageProps} />
    </Layout>
  );
};