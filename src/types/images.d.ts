type PlaceGallery = {
  [key: string]: PlaceDetail[];
}

type PlaceDetail = {
  date_id: string;
  name: string;
  folder_name: string;
  description: string;
  date_start: string;
  date_end: string;
  places: Array<ImageAlbums>;
}

type ImageAlbums = {
  name: string;
  description: string;
  images: Array<ImageProperies>;
}

type ImageProperies = {
  type: string;
  name: string;
  id: string;
  description: string;
}
