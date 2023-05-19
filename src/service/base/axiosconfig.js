const getTokenFromLocalStorage = localStorage.getItem("user")
  ? JSON.parse(localStorage.getItem("user"))
  : null;
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJjbGllbnQxMTExMTFAZ21haWwuY29tIiwiaWQiOjc5LCJuYW1lIjoiQ2xpZW50IDExMTF3MSIsInJvbGVzIjpbIkNVU1RPTUVSIl0sImlhdCI6MTY4NDQ2MjI3NSwiZXhwIjoxNjg0NTQ4Njc1fQ._irB145ULceKpp0tqXJJLL3IDmEyzZWDXPBXY5jhcgs";
export const config = {
  headers: {
    Authorization: `Bearer ${getTokenFromLocalStorage !== null ? getTokenFromLocalStorage.token : token}`,
    Accept: "application/json",
  },
};
