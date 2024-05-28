import { Grid } from '@mui/material'
import React from 'react'

export default function JournyLine() {
  return (
    <Grid
        item
        xs={0.5}
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        height={"72px"}
        width={"32px"}
        
      >
        <img src="/divider2.svg" height={"19px"} width={"2px"} />
        <img src="/aeroplane2.svg" height={"16px"} width={"16px"} />
        <img src="/divider2.svg" height={"19px"} width={"2px"} />
      </Grid>
  )
}
