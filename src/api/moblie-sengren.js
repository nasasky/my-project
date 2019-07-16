import axios from "@/utils/custom-axios";

export const myinfo = () => {
  return axios({
    url: "/shaman/myinfo",
    method: "get"
  });
};
