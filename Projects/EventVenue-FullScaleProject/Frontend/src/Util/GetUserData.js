import { jwtDecode } from "jwt-decode";

export const getUserRole = () => {
  try {
    const token = sessionStorage.getItem("authToken");
    if (token) {
      const decodedToken = jwtDecode(token);
      return decodedToken.role;
    }
  } catch (error) {
    console.error("Error decoding token:", error);
  }
  return null;
};
export const getUserID = () => {
  try {
    const token = sessionStorage.getItem("authToken");
    if (token) {
      const decodedToken = jwtDecode(token);
      return decodedToken.id;
    }
  } catch (error) {
    console.error("Error decoding token:", error);
  }
  return null;
};
