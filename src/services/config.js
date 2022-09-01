import axios from "axios";
const Axios = () => {
  const apiHost =
    typeof process.env.REACT_APP_API_URL !== "undefined"
      ? process.env.REACT_APP_API_URL
      : "http://localhost:5000/";

  /**
   * Base url for API calls
   */
  const axiosInstance = axios.create({
    baseURL: apiHost,
    validateStatus: (status) => {
      let correct = false;

      if (status >= 200 && status < 300) {
        correct = true;
      } else if (
        status === 401 ||
        status === 403 ||
        status === 503 ||
        status === 422
      ) {
        correct = true;
      }

      return correct;
    },
  });

  return axiosInstance;
};

export default Axios;
