import axios from "axios";
const api = "https://weatherapi-uqbm.onrender.com/results";

export const fetchData = async (city) => {
  try {
    const location = JSON.stringify({ city: city });
    const options = {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
    };
    const { data } = await axios.post(api, location, options);
    if (data === "error") {
      console.log(data);
    }
    return data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};
