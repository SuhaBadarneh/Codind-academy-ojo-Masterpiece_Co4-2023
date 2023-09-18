import baseURL from "../../assets/common/baseURL";
import axios from "axios";

export async function getProducts() {
  return axios
    .get(`${baseURL}products`)
    .then((res) => {
      console.log(res.data);
      return res.data;
    })
    .catch((error) => {
      console.log("Api call error", error.message);
    });
}
