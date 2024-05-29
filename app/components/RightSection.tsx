import { Grid } from '@mui/material'
import React from 'react'
import BreadCrumbs from './BreadCrumbs'
import ListComponent from './ListComponent'

export default function RightSection() {
  return (
    <Grid item container style={{width:"75%",padding:"20px 0px 0px 24px"}} gap={"20px"}>
        <BreadCrumbs />
        <ListComponent />
    </Grid>
  )
}
