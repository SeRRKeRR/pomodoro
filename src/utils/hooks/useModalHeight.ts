import { useRef, useEffect } from "react"

export function useModalHeight() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (ref.current) ref.current.style.height = `${document.documentElement.scrollHeight}px`
  }, [])

  return [ref]
}
