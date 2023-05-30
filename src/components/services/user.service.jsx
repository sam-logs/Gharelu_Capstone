import { myAxios } from "./helper";

export const signUp = (user) => {
  return myAxios
    .post('http://localhost:8097/api/auth/signup',user)
    .then((response) => response.data);
};

export const loginUser=(loginDetail)=>{
  return myAxios.post('http://localhost:8097/api/auth/signin',loginDetail).then((response)=>response.data)
}

export const getUser = (userId) => {
  return myAxios.get(`/users/${userId}`).then(response => response.data)
}

export const updateUser = (userId) => {
  return myAxios.put(`/users/${userId}`).then(response => response.data)
}