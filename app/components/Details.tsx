import { Grid, Typography } from "@mui/material";
import React from "react";
import {
  circle,
  colorTitle,
  elipse,
  mainContainer,
  navbar,
  secondContainer,
  title,
  title2,
} from "../styles";

export default function Details() {
  return (
    <Grid container style={{ height: "100vh" }}>
      <Grid item xs={12} style={navbar}></Grid>
      <Grid
        item
        container
        style={mainContainer}
        display={"flex"}
        justifyContent={"center"}
      >
        <Grid
          item
          container
          style={secondContainer}
          display={"flex"}
          justifyContent={"flex-start"}
          flexDirection={"row"}
        >
          <Grid
            item
            width={"22.30%"}
            style={{ height: "100%", padding: "20px 0px 16px 0px" }}
            container
          >
            <Grid
              item
              style={{
                background: "white",
                width: "100%",
              }}
            ></Grid>
          </Grid>
          <Grid
            item
            container
            width={"77.70%"}
            style={{ height: "100%", padding: "20px 0 20px 24px" }}
          >
            <Grid
              item
              container
              style={{ height: "100%", padding: "20px 0 20px 24px" }}
            >
              <Grid item container style={{ height: "20px" }}>
                <Grid item container xs={7}>
                  <Grid item xs={1}>
                    <Typography style={title} textAlign={"left"}>
                      Home
                    </Typography>
                  </Grid>
                  <Grid item xs={0.5}>
                    <img src="/icon1.svg" />
                  </Grid>
                  <Grid item xs={2.5}>
                    <Typography style={title}>Booking History</Typography>
                  </Grid>

                  <Grid item xs={0.5}>
                    <img src="/icon1.svg" />
                  </Grid>
                  <Grid item xs={1}>
                    <Typography style={title}>Flight</Typography>
                  </Grid>
                  <Grid item xs={0.5}>
                    <img src="/icon1.svg" />
                  </Grid>
                  <Grid item xs={2}>
                    <Typography style={colorTitle}>
                      STFL17121182045413
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid
                item
                container
                style={{ height: "100%", background: "white" }}
              >
                <Grid
                  item
                  container
                  style={{
                    height: "72px",
                    padding: "16px 20px",
                    borderWidth: "0px 0px 1px 0px",
                    borderColor: "#EBF0F5",
                  }}
                >
                  <Grid item container>
                    <Grid
                      item
                      xs={1}
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Typography style={circle} textAlign={"center"}>
                        1
                      </Typography>
                    </Grid>
                    <Grid item xs={10}>
                      <Typography
                        style={{
                          color: "black",
                          lineHeight: "24px",
                          fontSize: "18px",
                          fontWeight: "600",
                        }}
                      >
                        DAC → JFK
                      </Typography>
                      <Grid container>
                        <Grid item xs={1.20}>
                          <Typography style={title2}>Round Trip</Typography>
                        </Grid>
                        <Grid
                          item
                          xs={0.25}
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <Grid style={elipse}></Grid>
                        </Grid>

                        <Grid item xs={2.125}>
                          <Typography style={title2}>
                            25 Mar - 4 Apr 2023
                          </Typography>
                        </Grid>
                        <Grid
                          item
                          xs={0.25}
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <Grid style={elipse}></Grid>
                        </Grid>
                        <Grid item xs={2}>
                          <Typography style={title2}>
                            1 stop
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
