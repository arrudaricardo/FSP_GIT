import axios from "axios";

//{credential: email or username, password}
//
//
const config = {
  headers: {
    "Content-Type": "application/json"
  }
};

// {user:{credential:"ricardo or settiricardo@gmail.com",password:"xxxx"}})
export const login = user => axios.post(`/api/session`, user, config);

export const signup = user => axios.post(`/api/users`, user);
export const logout = () => axios.delete(`/api/session`);

