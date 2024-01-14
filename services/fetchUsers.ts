import { UserInfo } from "../types/UserInfo";

const LOGIN_API = "http://172.16.100.69:8888/users/login";
// usar la ip de tu propio ordenador a la hora de ejecutar la api, npm run dev

const getInitRequest = (httpVerb: string, user: UserInfo) => {
  const init: RequestInit = {
    method: httpVerb,
    headers: { Accept: "application/json", "Content-Type": "application/json" },
    body: JSON.stringify(user),
  };
  return init;
};

export const fetchUser = async (user2: UserInfo) => {
  let user: string = "_";
  try {
    const request: RequestInfo = `${LOGIN_API}`;

    const response = await fetch(request, getInitRequest("POST", user2));

    if (response.status == 400) {
      console.log("Algo hay mal");

      return null;
    } else if (response.status == 200) {
      const json = await response.json();
      user = json.name;
      return user;
    }
  } catch (error) {
    console.log(error);
  }
  return user;
};
