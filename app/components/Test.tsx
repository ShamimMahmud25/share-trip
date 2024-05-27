import React from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  Divider,
  Container
} from '@mui/material';

const FlightDetails = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Card variant="outlined">
        <CardContent>
          <Typography variant="h6" component="div" gutterBottom>
            DAC → JFK
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            Round Trip • 25 Mar - 4 Apr 2023 • 1 Stop
          </Typography>

          <Box sx={{ mt: 2, p: 2, border: '1px solid #ddd', borderRadius: 1 }}>
            <Typography variant="h6" component="div" gutterBottom>
              Departure from Dhaka
            </Typography>
            <Typography variant="body1" component="div">
              Terminal 1: Hazrat Shahjalal International Airport
            </Typography>
            <Divider sx={{ my: 2 }} />

            <Typography variant="body2" color="textSecondary">
              Mehedi Hasan Sumit
            </Typography>
            <Typography variant="body2" component="div">
              Turkish Airlines
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Flight no: TUR467
            </Typography>
            <Typography variant="body2" component="div">
              Airbus Industrie 737-800-738
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Class: ECONOMY (Y)
            </Typography>

            <Box sx={{ mt: 2, p: 2, bgcolor: '#f9f9f9', borderRadius: 1 }}>
              <Typography variant="body2" color="error">
                Technical stopover at Najaf International Airport (NJF). Before booking this flight please check your visa requirements as per your nationality.
              </Typography>
            </Box>

            <Divider sx={{ my: 2 }} />

            <Typography variant="body2" component="div">
              DAC → DXB
            </Typography>
            <Typography variant="body2" color="textSecondary">
              12 hr 20 min
            </Typography>
            <Typography variant="body2" component="div">
              Departure: 07:30 PM, 28 Mar, Friday
            </Typography>
            <Typography variant="body2" component="div">
              Arrival: 08:50 AM, 29 Mar, Saturday
            </Typography>

            <Divider sx={{ my: 2 }} />

            <Typography variant="body2" component="div">
              Layover at Dubai: 12 hr 20 min
            </Typography>

            <Divider sx={{ my: 2 }} />

            <Typography variant="body2" component="div">
              Destination at New York
            </Typography>
            <Typography variant="body2" component="div">
              Terminal 4: John F Kennedy International Airport
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
}

export default FlightDetails;
