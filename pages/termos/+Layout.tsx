import React from "react";
import DefaultLayout from "../../layouts/DefaultLayout";
import type { PageContext } from "../../renderer/App";

export default ({
  children,
  pageContext,
}: {
  children: React.ReactNode;
  pageContext: PageContext;
}) => {
  return <DefaultLayout pageContext={pageContext}>
    <div className="mx-auto px-4 prose my-20 max-w-[1000px]">{children}</div>
  </DefaultLayout>;
};
