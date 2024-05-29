import { Grid } from '@mui/material'
import React from 'react'
import { navbar, topSection } from '../styles'

export default function TopSection() {
  return (
    <Grid item xs={12} style={topSection}>
        <Grid style ={navbar}>
        </Grid>
      </Grid>
  )
}
