import axios from "axios";
import qs from "qs";

axios.defaults.transformRequest = (data) => qs.stringify(data);
axios.defaults.headers["Content-Type"] = "application/x-www-form-urlencoded";
axios.defaults.withCredentials = true;
axios.interceptors.response.use((res) => {
  let status = res.status;
  if (/^2|3/.test(status)) {
    return res.data;
  }
  let text = res.statusText;
  if (text) {
    switch (status) {
      case 400:
        break;
    }
  } else {
    alert("please check your internet");
  }
  return Promise.reject(text || "no connect");
});

export default axios;
