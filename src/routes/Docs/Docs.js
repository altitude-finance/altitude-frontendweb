import React, { useCallback, useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { DocsContent } from './components/DocsContent'
import { DocsDrawer } from './components/DocsDrawer'

import { useMediaQuery, useTheme } from '@material-ui/core'
import { DocsMenu } from './components/DocsMenu'
import { ColumnView } from 'components/ColumnView'
import DocsRouteMap from 'constants/DocsRouteMap'

export const Docs = () => {
  const location = useLocation()
  console.log(location.pathname)
  const { docId } = useParams()
  const theme = useTheme()
  const useMobile = useMediaQuery(theme.breakpoints.down("sm"))
  const [content, setContent] = useState("")

  const mapRouteToDocument = useCallback(() => {
    if (DocsRouteMap.mappings[location.pathname]) {
      return DocsRouteMap.mappings[location.pathname]
    } else {
      return DocsRouteMap.mappings["/docs"]
    }
  }, [location.pathname])

  const loadContent = useCallback(async (path) => {
    const response = await fetch(path)
    const text = await response.text()
    // console.log(text)
    setContent(text)
  }, [setContent])

  useEffect(() => {
    loadContent(mapRouteToDocument())
  }, [loadContent, mapRouteToDocument, docId])

  return (
    <ColumnView flexDirection="row" height="100%">
      {!useMobile && <DocsDrawer />}
      <DocsContent content={content} />
    </ColumnView>
  )
}
