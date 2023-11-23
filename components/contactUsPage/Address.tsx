import { Box, SxProps } from "@mui/material";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import { AddressSection, SocialMediaSection } from "./components";

interface PropsTypes {
  sx: SxProps;
}

const googleMap = process.env.GOOGLE_MAP_API_KEY;

export function Address(props: PropsTypes) {
  const { sx } = props;
  const mapStyles = {
    height: "300px",
    width: "300px",
  };

  return (
    <Box
      sx={{
        ...sx,
        pr: { xs: 0, md: 20 },
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <AddressSection />
      <SocialMediaSection />
      <LoadScript googleMapsApiKey={"AIzaSyAieNU8SOCUCddJGLf4SoPIexTPaQGag5w"}>
        <GoogleMap
          mapContainerStyle={mapStyles}
          center={{ lat: 53.4329011, lng: -2.3868062 }}
          zoom={20}
        />
      </LoadScript>
    </Box>
  );
}
