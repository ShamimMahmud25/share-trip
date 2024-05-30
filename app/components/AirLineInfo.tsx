import { Grid, Typography } from "@mui/material";
import React from "react";
import { airInfoTitle, flightNoTitle } from "../styles";

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
          <Typography style={airInfoTitle}>Turkish Airlines</Typography>
        </Grid>
        <Grid item>
          <Typography style={flightNoTitle}>Flight no : TUR467</Typography>
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
          <Typography style={flightNoTitle}>
            Airbus Industrie 737-800-738
          </Typography>
        </Grid>
        <Grid item>
          <Typography style={flightNoTitle}>
            Class :<span style={airInfoTitle}>ECONOMY-Y (O)</span>
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
          <Typography style={flightNoTitle}>
            {/* Airbus Industrie 737-800-738 */}
          </Typography>
        </Grid>
        <Grid item>
          <Typography style={flightNoTitle}>
            {/* Class :<span style={airInfoTitle}>ECONOMY-Y (O)</span> */}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}
