import { PhotoActionTypes } from "./photo.types";

export const getPhotos = photo => ({
  type: PhotoActionTypes.SET_PHOTOS,
  payload: photo
});
