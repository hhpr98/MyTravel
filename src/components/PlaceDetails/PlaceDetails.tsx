import React from "react";

import { useParams } from "react-router";

import { Plus, Search } from "../../assets/images/index.js";
import imageData from "../../resources/my-travel/consts/images.json";
import placesData from "../../resources/my-travel/consts/places.json";

const placeGallery: PlaceGallery = imageData as PlaceGallery;
const places: Places = placesData as Places;

const PlaceDetails = (): JSX.Element => {
  // Get place id to get data
  const { id } = useParams();

  // Get name of place
  const findPlace = places.vietnam.find((place) => place.id.toString() === id)
    || places.world.find((place) => place.id.toString() === id);
  if (!findPlace) {
    // TODO: handle this exception
  }
  const placeName = findPlace.name || "<chưa xác định>";

  const renderPlaceDate = (): JSX.Element[] => {
    const placeDataRet: JSX.Element[] = [];

    placeGallery[id].forEach((placeDetail: PlaceDetail) => {
      // Push for each journey
      // (Each journey on this place, this place (such as Da lat) can be visit many times)
      placeDataRet.push(
        <div
          key={`title-for-${placeDetail.date_id}`}
          className="text-base font-semibold mb-4 text-purple"
        >
          <i>{placeDetail.description}</i>
        </div>
      );

      // Push for the detail of this journey (Những nơi mà hành trình đó bạn ghé qua)
      const imageAlbums: ImageAlbums[] = placeDetail.places;
      placeDataRet.push(
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4">
          {
            imageAlbums.map((album: ImageAlbums, index: number) => <div
              key={`place-${id}-${placeDetail.date_id}-${index}`}
              className={`
              bg-white/20 p-6 rounded-md shadow-sm cursor-pointer border-2 border-gray-50
              hover:border-purple hover:border-2 transition-colors duration-300
            `}
            >
              <h2 className="text-xl font-semibold mb-4 text-purple">{album.name}</h2>
              <p
                className="text-purple">
                {album.description}
              </p>
              <div className="col-start-2 row-start-1 row-end-3 sm:mt-4 lg:mt-4 xl:mt-4">
                <dd
                  className={`
                  flex justify-end sm:justify-start
                  lg:justify-end xl:justify-start -space-x-1.5
                `}
                >
                  {
                    // eslint-disable-next-line max-len
                    [48, 49, 50, 51, 52].map((n) => <img key={`img-${n}`} src={`https://placekitten.com/${n}/${n}`} alt="" className="w-6 h-6 rounded-full bg-black" loading="lazy" />)
                  }
                </dd>
              </div>
            </div>)
          }
        </div>
      );
    });

    return placeDataRet;
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text-purple">Về trang chủ</h1>

      <div className="bg-gray-100 flex items-start justify-center lg:h-screen py-16">
        <div className="w-11/12 sm:w-11/12 md:w-8/12 lg:w-6/12 bg-white p-6 rounded-lg shadow-sm">
          <div className="w-full flex justify-between items-center p-3">
            <h2 className="text-xl font-semibold text-purple">
              {`Tôi đã đến ${placeName} và đi những đâu?`}
            </h2>
            <button
              id="openModalBtn"
              className={`
                flex items-center bg-purple
                border border-purle text-white font-semibold
                py-2 px-4 rounded-md transition-colors duration-300
              `}
            >
              <img
                className="filter brightness-0 invert"
                src={Plus as string}
                alt="Plus icon"
                width={20}
                height={20}
              />
              <p className="text-white">Thêm chuyến đi</p>
            </button>
          </div>
          <div className="w-full flex justify-center p-1 mb-4">
            <div className="relative w-full">
              <input
                type="text"
                className={`
                  w-full bg-white py-2 pl-10 pr-4 rounded-lg
                  focus:outline-none border-2 border-purple-100
                  focus:border-purple transition-colors duration-300
                `}
                placeholder="Tìm kiếm..."
              />
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <img
                  className="filter brightness-0"
                  src={Search as string}
                  alt="Plus icon"
                  width={20}
                  height={20}
                />
              </div>
            </div>
          </div>
          {renderPlaceDate()}
        </div>
      </div>

    </div >
  );
};

export default PlaceDetails;
