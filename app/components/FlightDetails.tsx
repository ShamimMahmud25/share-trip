import { Grid, Typography } from '@mui/material'
import React from 'react'
import { flightTitle, locationElipse, terminalTitle, title, title2, title3 } from '../styles'

export default function FlightDetails () {
  return (
    <Grid container item style={{height:"48px",padding:"4px 0px"}} gap={"12px"}>
      <Grid item xs={0.5} display={"flex"} justifyContent={"center"} flexDirection={"column"} style={{margin:"2px 0px 0px 5.25px"}}>
         <img src='/location.svg' style={{height:'20px',width:"13.5px"}}/>
         <Grid style={locationElipse}>
         </Grid>
      </Grid>
      <Grid item xs={11} container >
        <Grid item container style={{padding:"10px 16px 12px 16px",background:"#F5F7FA"}}>
        <Grid item xs={6}>
            <Typography style={flightTitle} textAlign={"left"}>
            Departure from Dhaka
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography style={terminalTitle} textAlign={"right"}>
            Terminal 1: <span style={title3}>Hazrat Shahjalal International Airport</span> 
            </Typography>
          </Grid>
        </Grid>
         
      </Grid>
    </Grid>
  )
}
