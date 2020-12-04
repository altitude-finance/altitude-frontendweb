import React from 'react'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

export const Scroll = ({ children }) => {
  const location = useLocation()
  const [prev, setPrev] = useState('')

  useEffect(() => {
    if (location.pathname !== prev) {
      window.scrollTo(0,0)
      setPrev(location.pathname)
    }
  }, [location.pathname, setPrev, prev])


  return <>{children}</>
}
