import { useRef, useEffect } from "react"

export function useFocus() {
  const ref = useRef<HTMLInputElement>(null)

  useEffect(() => {
    const textArea = ref.current
    if (textArea) {
      textArea.focus()
      textArea.selectionStart = textArea.value.length
    }
  }, [])

  return [ref]
}
