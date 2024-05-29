import { Grid } from '@mui/material'
import React from 'react'
import Content from './Content'

export default function BreadCrumbs() {
  return (
    <Grid item container xs={12} style={{height:"20px"}} gap={"6px"}>
        <Content />
    </Grid>
  )
}
