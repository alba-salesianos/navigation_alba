const BORED_ACTIVITIES_API_URL = "https://www.boredapi.com/api/activity";

const getInitRequest = (httpVerb: string) => {
  const init: RequestInit = {
    method: httpVerb,
    headers: { Accept: "application/json", "Content-Type": "application/json" },
  };
  return init;
};

export const fetchActivity = async (): Promise<string> => {
  let facts: string = "";

  const request: RequestInfo = `${BORED_ACTIVITIES_API_URL}`;

  const response = await fetch(request, getInitRequest("GET"));
  const json = await response.json();
  if (json != null) {
    facts = json.activity;
  }
  return facts;
};
