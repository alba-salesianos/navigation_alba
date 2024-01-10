const LOGIN_API = "http://172.16.102.33:8888/users/login";

const getInitRequest = (httpVerb: string) => {
  const init: RequestInit = {
    method: httpVerb,
    headers: { Accept: "application/json", "Content-Type": "application/json" },
    body: JSON.stringify({
      name: "alba",
      password: "1235",
    }),
  };
  return init;
};

export const fetchAllUsers = async (): Promise<string> => {
  let user: string = "_";
  try {
    const request: RequestInfo = `${LOGIN_API}`;

    const response = await fetch(request, getInitRequest("POST"));
    const json = await response.json();

    if (response.status == 200) {
      return (user = json.name);
    } else {
      return (user = "El usuario no existe.");
    }
  } catch (error) {
    console.log(error);
  }
  return user;
};
