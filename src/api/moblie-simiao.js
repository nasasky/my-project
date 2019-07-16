import axios from "@/utils/custom-axios";

export const getleixing_mb = () => {
  let url = "/infotype";
  return axios({
    url: url,
    method: "get"
  });
};

export const addUsizixun_mb = user => {
  let url = "/templemanager/information";
  return axios.request({
    url: url,
    data: user,
    method: "post"
  });
};
