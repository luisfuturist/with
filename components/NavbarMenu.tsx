import { useSignal } from '@preact/signals'
import clsx from 'clsx'
import type { ComponentChildren } from 'preact'
import { useEffect } from 'preact/hooks'
import type { NavbarMenuItem } from '../types'

interface Props {
  url: string
  items: NavbarMenuItem[]
  brandName?: ComponentChildren
}

function NavbarMenu(props: Props) {
  const visible = useSignal(false)

  useEffect(() => {
    const popState: (this: Window, ev: PopStateEvent) => void = () => {
      visible.value = false
    }

    window.addEventListener('popstate', popState)

    return () => window.removeEventListener('popstate', popState)
  }, [])

  return (
    <>
      <button
        type="button"
        class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        aria-controls="navbar-default"
        aria-expanded="false"
        onClick={() => visible.value = !visible.value}
      >
        <span class="sr-only">Abrir menu</span>
        {props.brandName}
      </button>
      <div class={clsx(["w-full md:block md:w-auto", visible.value ? 'block' : 'hidden'])} id="navbar-default">
        {props.items}
      </div>
    </>
  )
}

export default NavbarMenu
