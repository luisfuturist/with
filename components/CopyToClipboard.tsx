import { createElement, type ComponentChildren } from "preact"
import { toast } from "../store"

interface Props {
  tag?: string
  text: string
  children: ComponentChildren
  class?: string
}

function CopyToClipboard(props: Props) {
  const copyToClipboard = (text: string) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        toast.value = { visible: true, message: 'Discord copiado com sucesso!' }
      })
      .catch(() => {
        toast.value = { visible: true, message: 'Falha ao copiar', type: 'error' }
      })
  }

  return <>
    {createElement(props.tag || 'div', {
      onClick: () => copyToClipboard(props.text),
      class: props.class
    }, props.children)}
  </>
}

export default CopyToClipboard
