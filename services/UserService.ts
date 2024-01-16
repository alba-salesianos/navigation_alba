import { UserInfo } from "../types/UserInfo";
import AsyncStorage from "@react-native-async-storage/async-storage";

const LOGIN_API = "http://172.16.103.246:8888/users/";

const getInitRequest = (httpVerb: string, user: UserInfo) => {
  const init: RequestInit = {
    method: httpVerb,
    headers: { Accept: "application/json", "Content-Type": "application/json" },
    body: JSON.stringify(user),
  };
  return init;
};

const fetchUser = async (userData: UserInfo, mode: string) => {
  try {
    const request: RequestInfo = LOGIN_API + mode;

    const response = await fetch(request, getInitRequest("POST", userData));

    switch (response.status) {
      case 401:
        return null;

      case 400:
        return null;

      case 200:
        const loginCookie = response.headers.get("jwt");
        if (loginCookie) {
          await AsyncStorage.setItem("cookie-login", loginCookie);
        }

        return response.json();

      case 201:
        const signupCookie = response.headers.get("jwt");
        if (signupCookie) {
          await AsyncStorage.setItem("cookie-login", signupCookie);
        }

        return response.json();

      default:
        console.log("Unhandled response status:", response.status);
        return null;
    }
  } catch (error) {
    console.error("Error during fetchUser:", error);
    return null;
  }
};

const logOut = async (userData: UserInfo) => {
  let message: string = "_";
  try {
    const request: RequestInfo = LOGIN_API + "logout";

    const response = await fetch(request, getInitRequest("POST", userData));

    if (response.status === 401) {
      return null;
    } else if (response.status === 200) {
      const json = await response.json();
      message = json.message;
      await AsyncStorage.removeItem("cookie-login");
      return message;
    } else {
      console.log("Unhandled response status:", response.status);
      return null;
    }
  } catch (error) {
    console.error("Error during logOut:", error);
    return null;
  }
};

const userService = {
  fetchUser,
  logOut,
};

export default userService;
