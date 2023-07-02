import { fetchData } from "../../axios/axiosHelper";
import { setWeatherData } from "./weatherSlice";
import { toast } from "react-toastify";

export const getWeatherData = (city) => async (dispatch) => {
  try {
    const respPromise = fetchData(city);
    toast.promise(respPromise, {
      pending: "please wait....",
    });
    const { status, message, data } = await respPromise;
    toast[status](message);

    data && dispatch(setWeatherData(data));
    return true;
  } catch (error) {
    toast.error(error.message);
  }
};
