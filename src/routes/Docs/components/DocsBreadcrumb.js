import { Breadcrumbs, Link, Typography } from '@material-ui/core'
import React from 'react'
import { useHistory, useParams } from 'react-router-dom'

export const DocsBreadcrumb = () => {
  const history = useHistory()
  const { docId, folderId } = useParams()


  return (
    <Breadcrumbs aria-label="breadcrumb">
      <Link color="inherit" onClick={() => history.push('/docs')}>
        Docs
      </Link>
      {folderId && (
        <Link color="inherit" onClick={() => history.push(`/docs/${folderId}`)}>
          Folder
        </Link>
      )}
      {docId && <Typography color="textPrimary">Breadcrumb</Typography>}
    </Breadcrumbs>
  )
}
