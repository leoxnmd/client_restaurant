const getTokenFromLocalStorage = localStorage.getItem("user")
  ? JSON.parse(localStorage.getItem("user"))
  : null;
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJjbGllbnRAZ21haWwuY29tIiwiaWQiOjEyMSwibmFtZSI6Iktow6FjaCBow6BuZyIsInJvbGVzIjpbIkNVU1RPTUVSIl0sImlhdCI6MTY4NDY4ODA5OCwiZXhwIjoxNjg0Nzc0NDk4fQ.m165h5593S79xNjQVaUgWh8s1ZzVhn-hJqR1U3slUVo";
export const config = {
  headers: {
    Authorization: `Bearer ${getTokenFromLocalStorage !== null ? getTokenFromLocalStorage.token : token}`,
    Accept: "application/json",
  },
};
