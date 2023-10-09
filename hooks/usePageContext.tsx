import React, { useContext } from 'react'
import type { PageContext } from '../renderer/App'

const Context = React.createContext<PageContext>(undefined as unknown as PageContext)

export function PageContextProvider({ pageContext, children }: { pageContext: PageContext; children: React.ReactNode }) {
  return <Context.Provider value={pageContext}>{children}</Context.Provider>
}

// eslint-disable-next-line react-refresh/only-export-components
export function usePageContext() {
  const pageContext = useContext(Context)
  return pageContext
}
