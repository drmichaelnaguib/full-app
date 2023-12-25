import { queryParamsToQueryString } from "../utils/qs-helpers";

const BASE_URL = "https://full-app-57c40-default-rtdb.firebaseio.com/";

async function sendRequest(path, method, requestBody = {}, queryParams = {}) {
  let requestConfig = {
    method: method,
    headers: {
      "Content-Type": "application/json",
      // Authorization: "Bearer token",
    },
  };

  if (method === "POST" || method === "PATCH") {
    requestConfig = { ...requestConfig, body: JSON.stringify(requestBody) };
  }

  if (Object.keys(queryParams).length > 0) {
    let qs = queryParamsToQueryString(queryParams);
    path += qs;
  }

  const response = await fetch(BASE_URL + path, requestConfig);
  if (!response.ok) {
    return false;
  }
  // hena el response eli rage3 object feeh key esmo body 3ebara 3an data stream(chunks of data) f lazem n call function esmaha
  // .json betraga3 promise elresolved value beta3to heya el data eli 3ayezha men el api call
  else {
    return await response.json();
  }
}

export { sendRequest };
