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
    new window.google.maps.Map(ref.current, {
      center,
      zoom,
    });
  }, [center, zoom]);

  return (
    <div>
      <div className="ml-1 text-base">Google Map</div>
      <div ref={ref} id="map" />
    </div>
  );
}
