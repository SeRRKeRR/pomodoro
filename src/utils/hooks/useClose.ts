import { useRef, useEffect } from "react"

export function useClose(onClose: () => void, set: boolean) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (e.target instanceof Node && !ref.current?.contains(e.target)) {
        onClose()
        // console.log(onClose)
      }
    }

    document.addEventListener('click', handleClick)
    return () => {
      document.removeEventListener('click', handleClick)
    }
  }, [set])

  return [ref]
}
