const fromApiResponse = (apiResponse) => {
  const data = apiResponse;
  console.log(data);
  if (Array.isArray(data)) {
    const contests = data.map((item) => {
      return {
        ...item,
      };
    });
    return contests;
  }
  return [];
};

export function getNextPriceContest() {
  const apiURL = `/api/contest`;

  return fetch(apiURL)
    .then((res) => res.json())
    .then(fromApiResponse)
    .catch((error) => {
      console.log(`Error: ${error}`);
    });
}
