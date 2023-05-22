const getTokenFromLocalStorage = localStorage.getItem("user")
  ? JSON.parse(localStorage.getItem("user"))
  : null;
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJvd25lckBnbWFpbC5jb20iLCJpZCI6NjYsIm5hbWUiOiJDaOG7pyBj4butYSBow6BuZyIsInJvbGVzIjpbIk9XTkVSIl0sImlhdCI6MTY4NDY1NzY1NSwiZXhwIjoxNjg0NzQ0MDU1fQ.yk0HKg_lu_stfh_uHcmJnNRfWwnGqS3nsFjbTSc0eIQ"
export const config = {
  headers: {
    // Authorization: `Bearer ${getTokenFromLocalStorage !== null ? getTokenFromLocalStorage.token : token}`,
    Authorization: `Bearer ${token}`,
    Accept: "application/json",
  },
};
