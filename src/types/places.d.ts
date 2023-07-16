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
  placeName: string
  placeImage: string
  placeCheckedIn: boolean
}
