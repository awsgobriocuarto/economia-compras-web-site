const fromApiResponseToPosts = (apiResponse) => {
  const { data = [] } = apiResponse;
  if (Array.isArray(data)) {
    const posts = data.map((post) => {
      return {
        ...post,
      };
    });
    return posts;
  }
  return [];
};

export function getPosts({ page = 1, limit = 8 } = {}) {
  const apiURL = page
    ? `https://contenidos.gobiernoriocuarto.gob.ar/api/v1/posts?category=13&limit=${limit}&page=${page}`
    : `https://contenidos.gobiernoriocuarto.gob.ar/api/v1/posts?category=13&limit=${limit}`;
  return fetch(apiURL, {
    headers: {
      'Portal-Id': 3,
    },
  })
    .then((res) => res.json())
    .then(fromApiResponseToPosts)
    .catch((error) => {
      console.error('Error: ', error);
    });
}
