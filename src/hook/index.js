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

