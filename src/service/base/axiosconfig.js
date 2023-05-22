const getTokenFromLocalStorage = localStorage.getItem('user')
  ? JSON.parse(localStorage.getItem('user'))
  : null;
const token = "";
export const config = {
  headers: {
    Authorization: `Bearer ${getTokenFromLocalStorage !== null ? getTokenFromLocalStorage.token : token}`,
    Accept: "application/json",
  },
};