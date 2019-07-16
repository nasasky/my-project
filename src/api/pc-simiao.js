import axios from "@/utils/custom-axios";

export const simiaologin = data => {
  return axios({
    url: "/templemanager/authentications",
    //transformRequest 方法进行数据格式转换
    transformRequest: [
      function(data) {
        let ret = "";
        for (let it in data) {
          ret +=
            encodeURIComponent(it) + "=" + encodeURIComponent(data[it]) + "&";
        }
        ret = ret.substring(0, ret.lastIndexOf("&"));
        return ret;
      }
    ],
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    method: "post",
    data
  });
};

export const logout = () => {
  return axios.request({
    url: "/templemanager/logout",
    method: "get"
  });
};

export const addUsi = user => {
  let url = "/templemanager/temple";
  return axios.request({
    url: url,
    data: user,
    method: "post"
  });
};

export const simiaoxinxi = () => {
  let url = "/templemanager/temple";
  return axios({
    url: url,
    method: "get"
  });
};

export const addUsizixun = user => {
  let url = "/templemanager/information";
  return axios.request({
    url: url,
    data: user,
    method: "post"
  });
};

export const getleixing = () => {
  let url = "/infotype";
  return axios({
    url: url,
    method: "get"
  });
};

export const getma = () => {
  return axios({
    url: "/templemanager/bindqrcode",
    method: "get"
  });
};

export const yaoseng = () => {
  return axios({
    url: "/templemanager/inviteqrcode",
    method: "get"
  });
};
