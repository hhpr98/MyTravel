type Places = {
  vietnam: Place[]
  world: Place[]
}

type Place = {
  id: number
  name: string
  image?: string
  checkedIn?: boolean
}

type PlacesProps = {
  placeId: number
  placeName: string
  placeImage: string
  placeCheckedIn: boolean
}

type PlacesGalleryLocation = {
  placeId: string;
  placeName: string;
  albumData: ImageAlbums;
}
