import { Grid } from "@mui/material";
import React from "react";
import { historySidebar } from "../styles";

export default function LeftSection() {
  return (
    <Grid item container style={{ padding: "16px 0px", width: "22.30%" }} gap={"8px"}>
      <Grid
        container
        style={historySidebar}
        gap={"20px"}
      ></Grid>
    </Grid>
  );
}
