import { signal } from "@preact/signals";

export interface ToastState {
  message: string
  visible: boolean
  type?: 'success' | 'warning' | 'info' | 'error'
  duration?: number
}

export const INITIAL_STATE: ToastState = {
  message: '',
  visible: false,
  type: 'success',
  duration: 3000,
}

export const toast = signal<ToastState>(INITIAL_STATE)
