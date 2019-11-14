import axios from "axios";

// POST   /api/repositories/:repository_id/issues/:issue_id/comments
export const createComment = (data, repoId, issueId) => {
  return axios.post(
    `/api/repositories/${repoId}/issues/${issueId}/comments`,
    data
  );
};

export const getComments = (repoId, issueId) => {
  return axios.get(`/api/repositories/${repoId}/issues/${issueId}/comments`);
};

//exemple
// "1": {
//     "id": 1,
//     "body": "fuck this repo",
//     "user_id": 1,
//     "username": "ricardo",
//     "repository_name": "Test Name",
//     "repository_id": 2
// },
// "2": {
//     "id": 2,
//     "body": "fuck this repo",
//     "user_id": 1,
//     "username": "ricardo",
//     "repository_name": "Test Name",
//     "repository_id": 2
// },
// "3": {
//     "id": 3,
//     "body": "asdfasdf",
//     "user_id": 1,
//     "username": "ricardo",
//     "repository_name": "Test Name",
//     "repository_id": 2
// },
// "4": {
//     "id": 4,
//     "body": "hola",
//     "user_id": 1,
//     "username": "ricardo",
//     "repository_name": "Test Name",
//     "repository_id": 2
// }
