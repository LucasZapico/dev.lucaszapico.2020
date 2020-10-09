import React, { useState, useEffect, useRef, useLayoutEffect } from "react"

// get window width on resize hook
const getWidth = () => {
  if (typeof window !== "undefined") {
    return (
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth
    )
  } else {
    return 0
  }
}

export const useCurrentWidth = () => {
  let [width, setWidth] = useState(getWidth())

  useEffect(() => {
    const resizeListener = () => {
      setWidth(getWidth())
    }
    window.addEventListener("resize", resizeListener)

    return () => {
      window.removeEventListener("resize", resizeListener)
    }
  }, [])
  return width
}

// get window height on resize hook
const getHeight = () => {
  if (typeof window !== "undefined") {
    return (
      window.innerHeight ||
      document.documentElement.clientHeight ||
      document.body.clientHeight
    )
  } else {
    return 0
  }
}

export const useCurrentHeight = () => {
  let [height, setHeight] = useState(getHeight())

  useEffect(() => {
    const resizeListener = () => {
      setHeight(getHeight())
    }
    window.addEventListener("resize", resizeListener)

    return () => {
      window.removeEventListener("resize", resizeListener)
    }
  }, [])
  return height
}

const isBrowser = typeof window !== "undefined"

const getScrollPosition = ({ element, useWindow }) => {
  if (!isBrowser) return { x: 0, y: 0 }

  const target = element ? element.current : document.body
  const position = target.getBoundingClientRect()

  return useWindow
    ? { x: window.scrollX, y: window.scrollY }
    : { x: position.left, y: position.top }
}

export function useScrollPosition(effect, deps, element, useWindow, wait) {
  const position = useRef(getScrollPosition({ useWindow }))

  let throttleTimeout = null

  const callBack = () => {
    const currPos = getScrollPosition({ element, useWindow })
    effect({ prevPos: position.current, currPos })
    position.current = currPos
    throttleTimeout = null
  }

  useLayoutEffect(() => {
    const handleScroll = () => {
      if (wait) {
        if (throttleTimeout === null) {
          throttleTimeout = setTimeout(callBack, wait)
        }
      } else {
        callBack()
      }
    }

    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)
  }, deps)
}

// Scroll hook

// export function useScroll() {
//   const [lastScrollTop, setLastScrollTop] = useState(0)
//   const [bodyOffset, setBodyOffset] = useState(
//     document.body.getBoundingClientRect()
//   )
//   const [scrollY, setScrollY] = useState(bodyOffset.top)
//   const [scrollX, setScrollX] = useState(bodyOffset.left)
//   const [scrollDirection, setScrollDirection] = useState()

//   const listener = e => {
//     setBodyOffset(document.body.getBoundingClientRect())
//     setScrollY(-bodyOffset.top)
//     setScrollX(bodyOffset.left)
//     setScrollDirection(lastScrollTop > -bodyOffset.top ? "down" : "up")
//     setLastScrollTop(-bodyOffset.top)
//   }

//   useEffect(() => {
//     window.addEventListener("scroll", listener)
//     return () => {
//       window.removeEventListener("scroll", listener)
//     }
//   })

//   return {
//     scrollY,
//     scrollX,
//     scrollDirection,
//   }
// }
