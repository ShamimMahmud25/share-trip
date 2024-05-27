import { Grid, Typography } from "@mui/material";
import React from "react";
import { title6, title7 } from "../styles";

export default function AirLinesDetails() {
  return (
    <Grid
      container
      style={{ height: "140px" }}
      gap={"12px"}
    >
      <Grid
        item
        xs={0.5}
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
      >
        <img src="/divider.svg" height={"53px"} width={"32px"} />
        <img src="/aeroplane.svg" height={"32px"} width={"32px"} />
        <img src="/divider.svg" height={"53px"} width={"32px"} />
      </Grid>
      <Grid item xs={11} container gap={"16px"} padding={"16px 0"}>
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
          <Grid item xs={3.87} container gap={"6px"} display={"flex"}
            flexDirection={"column"}>
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
        </Grid>
      </Grid>
    </Grid>
  );
}
