import { combineReducers } from "redux";
import photoReducer from "../redux/photos/photo.reducer";
import hideReducer from "../redux/hideAndShow/hideAndShow.reducer";

import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";


const persistConfig = {
  key: "root",
  storage,
  whitelist: ["hide"]
};

const rootReducer = combineReducers({
  photos: photoReducer,
  hide: hideReducer
});

export default persistReducer(persistConfig,rootReducer);
