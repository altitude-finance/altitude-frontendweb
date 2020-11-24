import React, { useCallback, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import marked from 'marked'
import { DisplayView } from 'components/DisplayView'
import { DocsContent } from './components/DocsContent'
import { DocsDrawer } from './components/DocsDrawer'

import HOME_DOC from '../../docs/altitude.md'
import SLOPES_DOC from '../../docs/slopes.md'
import AVALANCHE_DOC from '../../docs/avalanche.md'
import { Box, useMediaQuery, useTheme } from '@material-ui/core'
import { DocsMenu } from './components/DocsMenu'
import { ColumnView } from 'components/ColumnView'

export const Docs = () => {
  const { docId } = useParams()
  console.log(docId)
  const theme = useTheme()
  const useMobile = useMediaQuery(theme.breakpoints.down("sm"))
  const [content, setContent] = useState("")

  const mapRouteToDocument = useCallback(() => {
    switch (docId) {
      case "avalanche":
        return AVALANCHE_DOC
      case "slopes":
        return SLOPES_DOC
      default:
        return HOME_DOC
    }
  }, [docId])

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
      <ColumnView flexDirection="row">
        {useMobile && <DocsMenu />}
        {!useMobile && <DocsDrawer />}
        <DocsContent content={content} />
      </ColumnView>
  )
}
