import * as React from "react";

import { Box } from "@mui/material";

import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";

const containerStyle = {
  height: "400px",
  width: "400px",
};

const center = {
  lat: 53.4329011,
  lng: -2.3868062,
};

const GOOGLE_MAP_API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY!;

export function GoogleMapContainer() {
  const [, setMap] = React.useState(null);

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: GOOGLE_MAP_API_KEY,
  });

  const onUnmount = React.useCallback(function callback(map: any) {
    setMap(null);
  }, []);
  return (
    <Box mt={20}>
      {isLoaded ? (
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={18}
          onUnmount={onUnmount}
        />
      ) : null}
    </Box>
  );
}
