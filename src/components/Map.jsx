"use client"
import React, { useState, useEffect } from 'react';
import {
  GoogleMap,
  useJsApiLoader,
  MarkerF
} from '@react-google-maps/api';

const Map = ({
  location,
  zoom,
}) => {
  const [currentLocation, setCurrentLocation] = useState(location);
console.log(location)
  const onMapLoad = (map) => {
    map.addListener('zoom_changed', () => {
      // handleChangeZoom(map.getZoom());
    });
  };


  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyCNw5aC3m67JrBZhU4wC8_FJ4IpeSqiCu8',
  });

  return (
    <>
      {isLoaded && (
        <GoogleMap
          mapContainerStyle={{ height: '400px', width: '100%',marginTop:20 }}
          center={currentLocation}
          zoom={zoom}
          onLoad={onMapLoad}
        >
                <MarkerF
            position={currentLocation}
            draggable={false}

          />
        </GoogleMap>
      )}
    </>
  );
};

export default Map;
