import React from "react";

import placesData from "../../resources/my-travel/consts/places.json";
import Places from "../Places/Places";

const places: Places = placesData as Places;

const MainPage = (): JSX.Element => {
  return (
    <div className="overflow-hidden bg-white py-6 sm:py-12 px-24 sm:px-32">
      <h1 className="text-6xl font-semibold leading-normal mt-0 mb-2 text-purple">
        Hành trình của tôi
      </h1>
      <h4 className="text-3xl font-normal leading-normal mt-0 mb-5 text-pink-800">
        Việt Nam
      </h4>
      <ul
        role="list"
        className="grid gap-x-8 gap-y-12 sm:grid-cols-4 sm:gap-y-16 xl:col-span-2"
      >
        {places.vietnam.
          sort((first, second) => Number(second.checkedIn) - Number(first.checkedIn))
          .map(
            (place: Place): JSX.Element =>
              <Places
                key={place.id}
                placeId={place.id}
                placeName={place.name}
                placeImage={place.image}
                placeCheckedIn={place.checkedIn}
              ></Places>
          )}
      </ul>
      <h4 className="text-3xl font-normal leading-normal mt-5 mb-5 text-pink-800">
        Thế giới
      </h4>
    </div>
  );
};

export default MainPage;
