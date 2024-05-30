import { Grid, Typography } from "@mui/material";
import React from "react";
import { info } from "../styles";
import AirLineInfo from "./AirLineInfo";

export default function AirLinesDetails() {
  return (
    <Grid container style={{ height: "140px" }} gap={"12px"}>
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
        <AirLineInfo />
        <Grid
          item
          container
          gap={"8px"}
          style={{
            background: "#FFE1C2",
            borderRadius: "6px",
            border: "1px solid #FFE1C2",
            height: "52px",
            padding: "8px 12px 8px 12px",
          }}
        >
          <Grid
            item
            xs={0.5}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Grid height={"20px"} width={"20px"}>
              <img src="/warning.svg" height={"16.67px"} width={"16.67px"} />
            </Grid>
          </Grid>
          <Grid item xs={11} height={"32px"}>
            <Typography style={info}>
              Technical stoppage at Malpensa International Airport (Milano).
              Before booking this flight please check your visa requirements as
              per your nationality
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
