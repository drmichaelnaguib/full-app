function queryParamsToQueryString(queryParams) {
  let qs = "?";
  let i = 0;
  for (let paramKey in queryParams) {
    // qs = qs + paramKey + "=" + queryParams[paramKey] + "&";
    qs += `${paramKey}=${queryParams[paramKey]}`;

    if (i !== Object.keys(queryParams).length - 1) {
      qs += "&";
    }

    i++;
  }
  return qs;
}
export { queryParamsToQueryString };
