import axios from "@/api/axios";

function sentCode(phoneMsg) {
  return axios.post("/captcha/sent", phoneMsg);
}

function checkCode(codeMsg) {
  return axios.get("/captcha/verify", codeMsg);
}

function checkPhone(phoneMsg) {
  return axios.post("/captcha/verify", phoneMsg);
}

const api = {
  sentCode,
  checkCode,
  checkPhone,
};

export default api;
