import React, { useState, useEffect } from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import Loading from "./Loading";
// https://react-google-maps-api-docs.netlify.app/#
export default function MapExample() {
  const [mapData, setMapData] = useState([]);
  const [loading, setLoading] = useState(false);
  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: "YOUR_API_KEY", // ,
    // ...otherOptions
  });
  console.log(mapData);

  useEffect(() => {
    setLoading(true);
    fetch("/api/map_data")
      .then((response) => response.json())
      .then((data) => {
        setMapData(data);
        setLoading(false);
      });
  }, []);

  if (loading || !isLoaded) {
    return <Loading />;
  }
  return (
    <GoogleMap
      center={{ lat: -3.745, lng: -38.523 }}
      mapContainerStyle={{ width: "400px", height: "400px" }}
      zoom={10}
    >
      {
        // ...map components like markers
      }
    </GoogleMap>
  );
}
