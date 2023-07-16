import React from "react";

import placesData from "../../consts/places.json";
import Places from "../Places/Places";

const places: Places = placesData as Places;

const MainPage = (): JSX.Element => {
  return (
    <div>
      <div>Những nơi tôi đã đi</div>
      {places.vietnam.map(
        (place: Place): JSX.Element => <Places key={place.id} placeName={place.name}></Places>
      )}
    </div>
  );
};

export default MainPage;
