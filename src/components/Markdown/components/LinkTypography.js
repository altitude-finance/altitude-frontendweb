import { Link, Typography } from '@material-ui/core'
import React from 'react'

export const LinkTypography = ({
  variant,
  gutterButtom,
  paragraph,
  children,
  ...props
}) => {
  const slug = children.toString().toLowerCase().replace(' ', '-')
  
  return (
    <Typography
      variant={variant}
      gutterBottom={gutterButtom}
      paragraph={paragraph}
      {...props}
    >
      <Link href={`#${slug}`}>
        {children}
      </Link>
      
    </Typography>
  )
}
