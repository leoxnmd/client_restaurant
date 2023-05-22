const getTokenFromLocalStorage = localStorage.getItem('user')
  ? localStorage.getItem('user')
  : null;
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJvd25lckBnbWFpbC5jb20iLCJpZCI6NjYsIm5hbWUiOiJDaD8gYz9hIGjDoG5nIiwicm9sZXMiOltdLCJpYXQiOjE2ODQ3MTgxOTAsImV4cCI6MTY4NDgwNDU5MH0.cBkCvHhtVIc3bo3KfGBC1vATU7BCSXemVpaqhKoOU2A";

localStorage.setItem('user', token);

export const config = {
  headers: {
    Authorization: `Bearer ${getTokenFromLocalStorage !== null ? getTokenFromLocalStorage : token}`,
    Accept: "application/json",
  },
};