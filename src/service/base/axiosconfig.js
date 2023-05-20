const getTokenFromLocalStorage = localStorage.getItem("user")
  ? JSON.parse(localStorage.getItem("user"))
  : null;
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJjbGllbnRAZ21haWwuY29tIiwiaWQiOjEyMSwibmFtZSI6Iktow6FjaCBow6BuZyIsInJvbGVzIjpbIkNVU1RPTUVSIl0sImlhdCI6MTY4NDU4MDI2OCwiZXhwIjoxNjg0NjY2NjY4fQ.Hqb2mjuM1FYsL5vlKgQ2NQmYL7fb_CqdCge72d_7O1w";
export const config = {
  headers: {
    Authorization: `Bearer ${getTokenFromLocalStorage !== null ? getTokenFromLocalStorage.token : token}`,
    Accept: "application/json",
  },
};
