import axios from "axios";
const baseUrl = "http://localhost:3001/regions";

const getAll = () => {
  const request = axios.get(baseUrl);
  return request.then((response) => response.data);
};

export default { getAll: getAll };
