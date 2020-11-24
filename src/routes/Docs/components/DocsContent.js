import { Box, Typography } from '@material-ui/core'
import Markdown from 'components/Markdown'
import { SafeAreaView } from 'components/SafeAreaView'
import React from 'react'
import { DocsBreadcrumb } from './DocsBreadcrumb'


export const DocsContent = ({ content }) => {
  return (
    <SafeAreaView>
      <Box p={3} display="flex" flexDirection="column">
        <DocsBreadcrumb />
        <Markdown children={content} />
      </Box>
    </SafeAreaView>
  )
}
