import { useComputed, useSignal, useSignalEffect } from '@preact/signals'
import clsx from 'clsx'
import { INITIAL_STATE, toast, type ToastState } from '../store'
import { useEffect } from 'preact/hooks'

const Toast = () => {
  const state = useComputed<ToastState>(() => {
    const data = toast.value

    return {
      message: data.message,
      type: data.type || 'success',
      visible: data.visible,
      duration: data.duration ?? INITIAL_STATE.duration
    }
  })
  const timer = useSignal<any>(0)

  const clearToast = () => {
    toast.value = { ...toast.value, visible: false }
  }

  useSignalEffect(() => {
    const data = state.value

    if(data.visible) {
      timer.value = setTimeout(clearToast, data.duration)
    }
  })

  useEffect(() => {
    return () => {
      clearTimeout(timer.value)
    }
  }, [])

  return (
    <div
      className={clsx(
        'fixed bottom-4 right-4 p-4 rounded-lg text-white z-50 transition-opacity duration-300',
        {
          'bg-green-600': state.value?.type === 'success',
          'bg-red-600': state.value?.type === 'error',
          'bg-orange-600': state.value?.type === 'warning',
          'bg-blue-600': state.value?.type === 'info',
        },
        state.value?.visible ? 'opacity-100' : 'opacity-0'
      )}>

      <span>{state.value?.message}</span>
    </div >
  )
}

export default Toast
