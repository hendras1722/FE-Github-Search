export const getData = (e) => {
  return fetch("https://api.github.com/users/" + e).then((res) => res.json());
};
