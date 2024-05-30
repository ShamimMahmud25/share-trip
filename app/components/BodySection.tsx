import { Grid } from "@mui/material";
import { bodyContainer } from "../styles";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";

export default function BodySection() {
  return (
    <Grid
      container
      style={bodyContainer}
      display={"flex"}
      justifyContent={"center"}
    >
      <Grid
        item
        container
        style={{
          width: "84%",
          display: "flex",
          justifyContent: "flex-start",
          flexDirection: "row",
        }}
        gap={"20px"}
      >
        <LeftSection />
        <RightSection />
      </Grid>
    </Grid>
  );
}
