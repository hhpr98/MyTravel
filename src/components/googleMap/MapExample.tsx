import React, { useEffect, useState } from 'react';
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import MyMapComponent from './MyMapComponent';

export default function MapExample(): JSX.Element {
  const [center, setCenter] = useState<google.maps.LatLngLiteral>({
    lat: 59.955413,
    lng: 30.337844,
  });

  const render = (status: Status): JSX.Element => {
    console.log(status);
    switch (status) {
      case Status.LOADING:
        return <div>loading</div>;
      case Status.FAILURE:
        return <div>error</div>;
      case Status.SUCCESS:
        return <MyMapComponent
          center={center}
          zoom={11}
        />;
    }
  };

  useEffect(() => {
    setCenter({ lat: 59.955413, lng: 30.337844 });
  }, []);

  return (
    <div style={{ height: "500px" }}>
      <Wrapper apiKey={process.env.REACT_APP_GOOGLE_API_KEY} render={render}>
        <MyMapComponent
          center={center}
          zoom={11}
        />
      </Wrapper>
    </div>
  );
}
