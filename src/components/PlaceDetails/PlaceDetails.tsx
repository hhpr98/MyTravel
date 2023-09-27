import React from "react";

// Do the same as https://www.postgresql.org/ftp/pgadmin/pgadmin4/
const PlaceDetails = (): JSX.Element => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">My Folders</h1>
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-blue-200 p-4">
          {/* Content for Folder A */}
          <h2 className="text-xl font-semibold mb-2">Folder A</h2>
          {/* Add your content here for Folder A */}
        </div>
        <div className="bg-green-200 p-4">
          {/* Content for Folder B */}
          <h2 className="text-xl font-semibold mb-2">Folder B</h2>
          {/* Add your content here for Folder B */}
        </div>
      </div>
    </div>
  );
};

export default PlaceDetails;
