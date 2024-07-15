export type AddressLatLong = {
  lat: number;
  lng: number;
}

export type SearchResult = {
  query: string;
  location: AddressLatLong;
}