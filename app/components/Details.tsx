import { Grid } from "@mui/material";
import React from "react";
import {
  containerStyle,
} from "../styles";

import TopSection from "./TopSection";
import BodySection from "./BodySection";

export default function Details() {
  return (
    <Grid container style={containerStyle}>
      <TopSection/>
      <BodySection />
    </Grid>
  );
}
