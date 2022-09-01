import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:5000/",
  validateStatus: (status) => {
    let correct = false;

    if (status >= 200 && status <= 403) {
      correct = true;
    } else if (status === 422) {
      correct = true;
    }

    return correct;
  },
});

const Request = (source) => {
  const thisInstance = axiosInstance;
  if (source === "") {
    const user = localStorage.getItem("user") || "";
    if (user !== "") {
      const token = JSON.parse(user);
      if (typeof token.accessToken !== "undefined") {
        thisInstance.defaults.headers.common.Authorization = `Bearer ${token.accessToken}`;
      }
    }
  } else {
    thisInstance.baseURL = "";
  }
  return thisInstance;
};

export function PostData(url, data, source) {
  return Request(source === undefined ? "" : source).post(url, data);
}

export function GetData(url, data, source) {
  const inputData = data || {};
  return Request(source === undefined ? "" : source).get(url, {
    params: inputData,
  });
}

export function UpdateData(url, data, source) {
  const inputData = data || {};
  return Request(source === undefined ? "" : source).update(url, {
    params: inputData,
  });
}

export function Delete(url, data, source) {
  const inputData = data || {};
  return Request(source === undefined ? "" : source).delete(url, {
    params: inputData,
  });
}
