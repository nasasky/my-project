import axios from "@/utils/custom-axios";

export const getUsers = page => {
  return axios.request({
    url: "/admin/templemanager",
    method: "get",
    data: page
  });
};

export const getsimiaouser = data => {
  let url = "/admin/templemanager_p";
  return axios.request({
    url: url,
    params: data,
    method: "get"
  });
};

export const addUser = user => {
  let url = "/admin/templemanager";
  return axios.request({
    url: url,
    data: user,
    method: "post"
  });
};

export const addUsizixun_app = user => {
  let url = "/templemanager/information";
  return axios.request({
    url: url,
    data: user,
    method: "post"
  });
};

export const editUser = user => {
  let url = "/api/user/" + user.id;
  return axios.request({
    url: url,
    data: user,
    method: "post"
  });
};

export const delUser = id => {
  let url = "/api/user/" + id;
  return axios.request({
    url: url,
    method: "delete"
  });
};

export const getfomen = data => {
  let url = "/admin/templemanager_p";
  return axios.request({
    url: url,
    params: data,
    method: "get"
  });
};

export const batchDelUser = idList => {
  let url = "/api/user/batch-delete";
  let data = {
    ids: idList
  };
  return axios.request({
    url: url,
    data: data,
    method: "post"
  });
};
