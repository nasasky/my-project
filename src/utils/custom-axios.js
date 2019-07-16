import axios from "axios";

if (process.env.NODE_ENV === "development") {
  axios.defaults.baseURL = "/api";
} else if (process.env.NODE_ENV === "production") {
  axios.defaults.baseURL = "http://192.168.0.18/api";
}

axios.interceptors.request.use(
  function(config) {
    config.headers.Authorization = localStorage.getItem("token");
    return config;
  },

  function(error) {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    // Do something with response error
    if (error && error.response) {
      switch (error.response.status) {
        case 400: {
          console.log("请求错误(400)");
          break;
        }
        case 401: {
          console.log("未授权，请重新登录(401)");
          //删除本地token，重新登陆
          break;
        }
        default: {
          console.log(error.response.status);
        }
      }
    } else {
      console.log("连接服务器失败！");
    }
    return Promise.reject(error);
  }
);

export default axios;
