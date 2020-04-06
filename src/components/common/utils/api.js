const useApi = () => {
  const get = (url) => {
    return fetch(url).then((res) => res.json());
  };

  const post = (url, body) => {
    return fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    }).then((res) => res.json());
  };

  const put = (url, body) => {
    return fetch(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    }).then((res) => res.json());
  };
  return {get, post, put};
};

export default useApi;
