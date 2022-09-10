import React, { useRef, useEffect } from 'react';

export default function MyMapComponent({
  center,
  zoom,
}: {
  center: google.maps.LatLngLiteral;
  zoom: number;
}): JSX.Element {
  const ref = useRef();

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    new window.google.maps.Map(ref.current, {
      center,
      zoom,
    });
  }, []);

  return <div ref={ref} id="map" />;
}
