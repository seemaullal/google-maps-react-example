import React, { useState, useEffect } from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import Loading from "./Loading";

export default function MapExample() {
  const [mapData, setMapData] = useState([]);
  const [loading, setLoading] = useState(false);
  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyAjpErE26dDxvQMnZS8I-cUOGjz6WW3rik", // ,
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
