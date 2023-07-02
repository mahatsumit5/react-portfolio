import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  weather: {},
};
const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    setWeatherData: (state, { payload }) => {
      state.weather = payload;
    },
  },
});

const { reducer, actions } = weatherSlice;
export const { setWeatherData } = actions;
export default reducer;
