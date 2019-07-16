import axios from "@/utils/custom-axios";

export const myinfo = () => {
  return axios({
    url: "/cp/myinfo",
    method: "get"
  });
};
