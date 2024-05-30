import { Grid, Typography } from '@mui/material'
import React from 'react'
import { title6, title7 } from '../styles'

export default function AirLineInfo() {
  return (
    <Grid item container gap={"12px"}>
          <Grid
            item
            xs={3.89}
            container
            gap={"6px"}
            display={"flex"}
            flexDirection={"column"}
          >
            <Grid item>
              <Typography style={title6}>Turkish Airlines</Typography>
            </Grid>
            <Grid item>
              <Typography style={title7}>Flight no : TUR467</Typography>
            </Grid>
          </Grid>
          <Grid
            item
            xs={3.89}
            container
            gap={"6px"}
            display={"flex"}
            flexDirection={"column"}
          >
            <Grid item>
              <Typography style={title7}>
                Airbus Industrie 737-800-738
              </Typography>
            </Grid>
            <Grid item>
              <Typography style={title7}>
                Class :<span style={title6}>ECONOMY-Y (O)</span>
              </Typography>
            </Grid>
          </Grid>
          <Grid
            item
            xs={3.87}
            container
            gap={"6px"}
            display={"flex"}
            flexDirection={"column"}
          >
            <Grid item>
              <Typography style={title7}>
                {/* Airbus Industrie 737-800-738 */}
              </Typography>
            </Grid>
            <Grid item>
              <Typography style={title7}>
                {/* Class :<span style={title6}>ECONOMY-Y (O)</span> */}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
  )
}
