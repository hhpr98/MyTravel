import React from "react";

import { Plus, Search } from "../../assets/images/index.js";

const PlaceDetails = (): JSX.Element => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text-purple">Về trang chủ</h1>

      <div className="bg-gray-100 flex items-start justify-center lg:h-screen py-16">
        <div className="w-11/12 sm:w-11/12 md:w-8/12 lg:w-6/12 bg-white p-6 rounded-lg shadow-sm">
          <div className="w-full flex justify-between items-center p-3">
            <h2 className="text-xl font-semibold">Tôi đã đến Đà Nẵng và...</h2>
            <button id="openModalBtn" className="flex items-center bg-black  border border-black text-white font-semibold py-2 px-4 rounded-md transition-colors duration-300">
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
              <input type="text" className="w-full  bg-white py-2 pl-10 pr-4 rounded-lg focus:outline-none border-2 border-gray-100 focus:border-black transition-colors duration-300" placeholder="Search..." />
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <img
                  className="filter brightness-0 invert"
                  src={Search as string}
                  alt="Plus icon"
                  width={20}
                  height={20}
                />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4">
            {/* <!-- Card 1 --> */}
            <div className=" bg-white/20 p-6 rounded-md shadow-sm cursor-pointer border-2 border-gray-50 hover:border-black hover:border-2 transition-colors duration-300">
              <h2 className="text-xl font-semibold mb-4">Project 1</h2>
              <p className="text-gray-700">Description of Project 2 goes here. You can provide more details about the project.</p>
              <div className="col-start-2 row-start-1 row-end-3 sm:mt-4 lg:mt-4 xl:mt-4">
                <dd className="flex justify-end sm:justify-start lg:justify-end xl:justify-start -space-x-1.5">
                  <img src="https://placekitten.com/48/48" alt="" className="w-6 h-6 rounded-full bg-black" loading="lazy" />
                  <img src="https://placekitten.com/49/49" alt="" className="w-6 h-6 rounded-full bg-black" loading="lazy" />
                  <img src="https://placekitten.com/50/50" alt="" className="w-6 h-6 rounded-full bg-black" loading="lazy" />
                  <img src="https://placekitten.com/51/51" alt="" className="w-6 h-6 rounded-full bg-black" loading="lazy" />
                  <img src="https://placekitten.com/52/52" alt="" className="w-6 h-6 rounded-full bg-black" loading="lazy" />
                </dd>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default PlaceDetails;
