import axios from "axios";

// const config = {
//   headers: {
//     "Content-Type": "application/json"
//   }
// };

//get array of all repositories
//resp: [{"id":2,"name":"Test Name","description":"Description Test","owner":"ricardo"},{"id":3,"name":"New one","description":"New description","owner":"ricardo"}]
export const getRepos = () => axios.get(`/api/repositories`);

// create repository
//localhost:3000/api/repositories/?[repository][name]=Test Name&[repository[description]=Description Test
export const postRepo = repository =>
  axios.post(`/api/repositories`, repository);

// show rep
// resp : {"id":2,"name":"Test Name","description":"Description Test","owner":"ricardo"}
export const getRepo = repoId => axios.get(`/api/repositories/${repoId}`);

// delete repository
export const deleteRepo = repoId => axios.delete(`/api/repositories/${repoId}`);

export const getRepoName = repoName =>
  axios.get(`/api/username/${repoName.username}/repo/${repoName.repo_name}`);
