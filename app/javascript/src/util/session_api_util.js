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

//get array of all repositories
//resp: [{"id":2,"name":"Test Name","description":"Description Test","owner":"ricardo"},{"id":3,"name":"New one","description":"New description","owner":"ricardo"}]
export const getRepos = () => axios.get(`/api/repositories`);

// show rep
// resp : {"id":2,"name":"Test Name","description":"Description Test","owner":"ricardo"}
export const getRepo = repoId => axios.get(`/api/repositories/${repoId}`);
// delete repository
export const deleteRepo = repoId => axios.delete(`/api/repositories/${repoId}`);

// create repository
//localhost:3000/api/repositories/?[repository][name]=Test Name&[repository[description]=Description Test
export const postRepo = repository =>
  axios.post(`/api/repositories`, respository);

