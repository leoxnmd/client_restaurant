const getTokenFromLocalStorage = localStorage.getItem('user')
  ? JSON.parse(localStorage.getItem('user'))
  : null;
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJvd25lckBnbWFpbC5jb20iLCJpZCI6NjYsIm5hbWUiOiJDaOG7pyBj4butYSBow6BuZyIsInJvbGVzIjpbIk9XTkVSIl0sImlhdCI6MTY4NDcyOTU4NSwiZXhwIjoxNjg0ODE1OTg1fQ.qwDwB_4OFKR4XqI-7oJjvsb5ei2Nn6YlRA0uNcrXoZg";
export const config = {
  headers: {
    Authorization: `Bearer ${getTokenFromLocalStorage.token !== null ? getTokenFromLocalStorage.token : token}`,
    Accept: "application/json",
  },
};