import { UserInfo } from "../types/UserInfo";

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

    if (response.status === 401) {
      console.log("Algo hay mal");
      return null;
    } else if (response.status === 200) {
      const json = await response.json();
      user = json.name;
      console.log("Usuario loggeado correctamente.");
      return user;
    } else if (response.status === 201) {
      const json = await response.json();
      user = json.name;
      console.log("Usuario registrado correctamente");
      return user;
    } else {
      console.log("Unhandled response status:", response.status);
      return null;
    }
  } catch (error) {
    console.error("Error during fetchUser:", error);
  }
  return user;
};
