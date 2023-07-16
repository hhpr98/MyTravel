import React from "react";

import placesData from "../../consts/places.json";
import Places from "../Places/Places";

const places: Places = placesData as Places;

const MainPage = (): JSX.Element => {
  return (
    <div className="md:container md:mx-auto">
      <div>Những nơi tôi đã đi</div>
      <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-6 sm:gap-y-16 xl:col-span-2">
        {places.vietnam.map(
          (place: Place): JSX.Element =>
            <Places key={place.id} placeName={place.name}></Places>

        )}
      </ul>
    </div>
  );
};

export default MainPage;
