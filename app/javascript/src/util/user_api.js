import axios from "axios";

export const getUser = userId => axios.get(`/api/users/${userId}`);

// return exemple: {"1":{"id":1,"username":"ricardo","repositories":[{"id":2,"name":"Test Name","description":"Description Test"},{"id":3,"name":"New one","description":"New description"},{"id":4,"name":"banana","description":"i love banana"},{"id":5,"name":"banana2","description":"i love bana"},{"id":6,"name":"another banana","description":"no banana"}]}}
