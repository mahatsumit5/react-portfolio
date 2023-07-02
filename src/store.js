import { configureStore } from "@reduxjs/toolkit";
import weatherReducer from "./Components/weather/weatherSlice";

// these will store data in webstorage
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; //default localstorage for web

const weatherPresistConfig = {
  //this is a configurations
  key: "localStorageWeatherData",
  storage,
};

const presistedWeatherReducer = persistReducer(
  weatherPresistConfig,
  weatherReducer
);

export const store = configureStore({
  reducer: {
    localStorageWeatherData: presistedWeatherReducer,
    weather: weatherReducer,
  },
});
export const persistor = persistStore(store);
