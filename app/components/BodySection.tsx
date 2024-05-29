import { Grid } from "@mui/material";
import { bodyContainer, secondContainer } from "../styles";
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
      <Grid item container style={{ width: "84%",display:"flex", justifyContent:"flex-start",flexDirection:"row" }} gap={"20px"}>
        <LeftSection/>
         <RightSection/>
        </Grid>
     </Grid>
  );
}

 {/* <Grid
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
                  <Navbar />
                </Grid>
                <Grid
                  item
                  container
                  style={{ height: "100%", background: "white" }}
                >
                  <Trip />
                  <Grid
                    container
                    style={{
                      height: "85%",
                      padding: "16px",
                      display: "flex",
                      justifyContent: "flex-start",
                      flexDirection: "column",
                    }}
                  >
                    <FlightDetails />
                    <FlightDetailsSecond />
                    <AirLinesDetails />
                    <Layover />
                    <FlightDetailsSecond />
                    <AirLinesDetailsSecond />
                    <Destination />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid> */}
