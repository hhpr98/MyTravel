import * as React from 'react';
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import MyMapComponent from './MyMapComponent';

export default function MapExample(): JSX.Element {
  const [center, setCenter] = React.useState<google.maps.LatLngLiteral>({ lat: 59.955413, lng: 30.337844 });
  const render = (status: Status): JSX.Element => {
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

  return (
    <div style={{ height: "500px" }}>
      <Wrapper apiKey={"AIzaSyDWTx7bREpM5B6JKdbzOvMW-RRlhkukmVE"} render={render}>
        <MyMapComponent
          center={center}
          zoom={11}
        />
      </Wrapper>
    </div>
  );
}
