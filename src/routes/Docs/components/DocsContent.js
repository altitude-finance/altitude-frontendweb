import { Box, Typography, useMediaQuery, useTheme } from '@material-ui/core'
import Markdown from 'components/Markdown'
import { SafeAreaView } from 'components/SafeAreaView'
import React from 'react'
import { DocsBreadcrumb } from './DocsBreadcrumb'
import { DocsMenu } from './DocsMenu'


export const DocsContent = ({ content }) => {
  const theme = useTheme()
  const useMobile = useMediaQuery(theme.breakpoints.down("sm"))

  return (
    <SafeAreaView>
      <Box p={3} display="flex" flexDirection="column" height="100vh">
        {useMobile && <DocsMenu />}
        <DocsBreadcrumb />
        <Markdown children={content} />
      </Box>
    </SafeAreaView>
  )
}
