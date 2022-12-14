import axios from "axios";

const url = "http://127.0.0.1:5000/users";

export const getUsers = async (id) => {
  id = id || "";
  return await axios.get(`${url}/${id}`);
};

export const addUser = async (user) => {
  return await axios.post(url, user);
};

export const editUser = async (id, user) => {
  console.log(JSON.stringify(user + "----------------"));
  return await axios.patch(`${url}/${id}`, user);
};

export const deleteUser = async (id) => {
  return await axios.delete(`${url}/${id}`);
};

export const registerUser = async (user) => {
  return await axios.post(url, user);
};
