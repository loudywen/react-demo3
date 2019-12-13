import { PhotoActionTypes } from "../photos/photo.types";

const init = {
  currentPhoto: null
};

const photoReducer = (state = init, action) => {
  switch (action.type) {
    case PhotoActionTypes.SET_PHOTOS:
      return {
        ...state,
        currentPhoto: action.payload
      };
    default:
      return state;
  }
};

export default photoReducer;
