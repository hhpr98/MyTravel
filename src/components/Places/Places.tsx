import React from "react";

const Places = (places: PlacesProps): JSX.Element => {
  return (
    <li>
      <div className="flex items-center gap-x-6">
        <img
          className="h-16 w-16 rounded-full"
          src="https://pyxis.nymag.com/v1/imgs/3e0/0c2/ba9244d9957a3a12d89bb3171879cbe4f9-pandora.rsquare.w330.jpg"
          alt="place"
        ></img>
        <div>
          <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
            {places.placeName}
          </h3>
          <p className="text-sm font-semibold leading-6 text-indigo-600">Co-Founder / CEO</p>
        </div>
      </div>
    </li>
  );
};

export default Places;
