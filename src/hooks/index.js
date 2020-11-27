const getWidth = () => {
  if (typeof window !== 'undefined') {
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
    window.addEventListener('resize', resizeListener)

    return () => {
      window.removeEventListener('resize', resizeListener)
    }
  }, [])
  return width
}
