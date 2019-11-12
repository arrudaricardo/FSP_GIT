import axios from "axios";

// POST   /api/repositories/:repository_id/issues(.:format)
// api/issues#create {:format=>:json}
//localhost:3000/api/repositories/2/issues?issue[title]=new Issue&issue[body]=issue body
// data issue[title] issue[body]
export const createIssue = (data, repoId) =>
  axios.post(`/api/repositories/${repoId}/issues`, data);

//localhost:3000/api/repositories/2/issues
//response: [{"id":1,"title":"new Issue","body":"issue body","owner":"ricardo","owner_id":1,"repository":"Test Name","repository_id":2}]
export const getIssues = repoId =>
  axios.get(`/api/repositories/${repoId}/issues`);

// request : localhost:3000/api/repositories/2/issues/1
// response : {"id":1,"title":"new Issue","body":"issue body","owner":"ricardo","owner_id":1,"repository":"Test Name","repository_id":2}
export const getIssue = (repoId, issueId) =>
  axios.get(`/api/repositories/${repoId}/issues/${issueId}`);
