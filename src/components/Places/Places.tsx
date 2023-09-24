import React from "react";

// eslint-disable-next-line max-len
const defaultURL = "https://cdn.tgdd.vn/Files/2022/10/01/1473455/kham-pha-lang-chay-gio-son-hai-ninh-thuan-dubai-thu-nho-cua-viet-nam-202210020925136207.jpg";

const Places = (places: PlacesProps): JSX.Element => {
  const imageURL = places.placeImage || defaultURL;

  const handlePlaceClick = (): void => {
    // eslint-disable-next-line no-console
    console.log(places.placeId);
  };

  return (
    <li>
      <div className="flex items-center gap-x-6 hover:cursor-pointer" onClick={handlePlaceClick}>
        <img
          className="h-16 w-16 rounded-full"
          src={imageURL}
          alt="place image"
        ></img>
        <div>
          <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
            {places.placeName}
          </h3>
          <p className="text-sm font-semibold leading-6 text-indigo-600">
            {places.placeCheckedIn ? "Checked-In" : ""}
          </p>
        </div>
      </div>
    </li>
  );
};

export default Places;
