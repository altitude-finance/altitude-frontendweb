import { Breadcrumbs, Link, Typography } from '@material-ui/core'
import DocsRouteMap from 'constants/DocsRouteMap'
import React from 'react'
import { useHistory, useParams } from 'react-router-dom'

export const DocsBreadcrumb = () => {
  const history = useHistory()
  const { docId, folderId } = useParams()

  const setBreadcrumb = () => {

  }

  const setFolder = () => {
    
  }


  return (
    <Breadcrumbs aria-label="breadcrumb">
      <Link color="inherit" onClick={() => history.push('/docs')}>
        Docs
      </Link>
      {folderId && (
        <Link color="inherit" onClick={() => history.push(`/docs/${folderId}`)}>
          {DocsRouteMap.titleMappings[folderId]}
        </Link>
      )}
      {docId && (
        <Typography color="textPrimary">
          {DocsRouteMap.titleMappings[docId]}
        </Typography>
      )}
      
    </Breadcrumbs>
  )
}
