import GoogleMapReact from 'google-map-react';
import * as React from 'react';

export default function MapExample(): JSX.Element {
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627
    },
    zoom: 11
  };

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <div>My Marker</div>
      </GoogleMapReact>
    </div>
  );
}
