import { UserInfo } from "../types/UserInfo";
import AsyncStorage from "@react-native-async-storage/async-storage";

const LOGIN_API = "http://192.168.1.33:8888/users/";
// usar la ip de tu propio ordenador a la hora de ejecutar la api, npm run dev

const getInitRequest = (httpVerb: string, user: UserInfo) => {
  const init: RequestInit = {
    method: httpVerb,
    headers: { Accept: "application/json", "Content-Type": "application/json" },
    body: JSON.stringify(user),
  };
  return init;
};

export const fetchUser = async (userData: UserInfo, mode: string) => {
  let user: string = "_";
  try {
    const request: RequestInfo = LOGIN_API + mode;

    const response = await fetch(request, getInitRequest("POST", userData));

    switch (response.status) {
      case 401:
        console.log("Algo hay en el login");
        return null;

      case 400:
        console.log("Algo hay en el registro");
        return null;

      case 200:
        const loginCookie = response.headers.get("jwt");
        if (loginCookie) {
          await AsyncStorage.setItem("cookie-login", loginCookie);
          console.log("Usuario loggeado correctamente.");
        }

        return response.json();

      case 201:
        const signupCookie = response.headers.get("jwt");
        if (signupCookie) {
          await AsyncStorage.setItem("cookie-login", signupCookie);
          console.log("Usuario registrado correctamente.");
        }

        return response.json();

      default:
        console.log("Unhandled response status:", response.status);
        return null;
    }
  } catch (error) {
    console.error("Error during fetchUser:", error);
  }
  return user;
};

export const logOut = async (userData: UserInfo) => {
  let message: string = "_";
  try {
    const request: RequestInfo = LOGIN_API + "logout";

    const response = await fetch(request, getInitRequest("POST", userData));

    if (response.status === 401) {
      console.log("Algo hay mal");
      return null;
    } else if (response.status === 200) {
      const json = await response.json();
      message = json.message;
      await AsyncStorage.removeItem("cookie-login");
      console.log("Sesión cerrada correctamente.");
      return message;
    } else {
      console.log("Unhandled response status:", response.status);
      return null;
    }
  } catch (error) {
    console.error("Error during logOut:", error);
  }
  return message;
};
