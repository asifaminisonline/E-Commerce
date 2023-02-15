import axios from "axios";

const params = {
  headers: {
    Authorization: "bearer " + process.env.REACT_APP_STRIPE_DEV_APP_KEY,
  },
};

export const fetchDataFromApi = async (uri) => {
  try {
    const { data } = await axios.get(
      process.env.REACT_APP_STRIPE_APP_DEV_URL + uri,
      params
    );
    return data;
  } catch (err) {
    console.log(err);
    return err;
  }
};
