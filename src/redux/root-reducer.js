import { combineReducers } from "redux";
import photoReducer from "../redux/photos/photo.reducer";

const rootReducer = combineReducers({
  photos: photoReducer
});

export default rootReducer;
