import React from "react";

import placesData from "../../resources/my-travel/consts/places.json";
import Places from "../Places/Places";

const places: Places = placesData as Places;

const MainPage = (): JSX.Element => {
  return (
    <div className="overflow-hidden bg-white py-6 sm:py-12 px-24 sm:px-32">
      <div>Những nơi tôi đã đi</div>
      <div>Việt Nam</div>
      <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-4 sm:gap-y-16 xl:col-span-2">
        {places.vietnam.map(
          (place: Place): JSX.Element =>
            <Places
              key={place.id}
              placeName={place.name}
              placeImage={place.image}
              placeCheckedIn={place.checkedIn}
            ></Places>
        )}
      </ul>
      <div>Thế giới</div>
    </div>
  );
};

export default MainPage;
