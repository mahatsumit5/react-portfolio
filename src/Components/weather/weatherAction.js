import { fetchData } from "../../axios/axiosHelper";
import { setWeatherData } from "./weatherSlice";
import { toast } from "react-toastify";

export const getWeatherData = (city) => async (dispatch) => {
  try {
    const { data } = await fetchData(city);

    data && dispatch(setWeatherData(data));
    return true;
  } catch (error) {
    toast.error(error.message);
  }
};
