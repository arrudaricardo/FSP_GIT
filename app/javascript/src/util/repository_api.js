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

export const getRepoLs = (username, reponame) =>
  axios.get(`/api/ls/${username}/${reponame}`);
// exemple
// {
//     "username": "ricardo",
//     "reponame": "test",
//     "ls": [
//         "README.md",
//         "aaaa.js",
//         "afolder/afle.js",
//         "afolder/hello.js",
//         "afolder/poke/pika.js"
//     ]
// }
//
//
// arr[<string>]
//["README.md","aaaa.js","afolder/afle.js","afolder/hello.js","afolder/poke/pika.js"]}
// export const parseRepoLs = arr => {
//   let folder = {};
//   // list of folders name
//   let result = (path, files) => {
//     children, path, files;
//   };

//   for (let path of arr) {
//     let temp = {};
//     let pathArr = path.split("/");
//     let (let i = 0; i < pathArr.length; i++){

//       }
//   }
// };
