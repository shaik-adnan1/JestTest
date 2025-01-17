const fetch = require("node-fetch");

const getPeoplePromise = (fetch) => {
  return fetch("http://swapi.py4e.com/api/people/")
    .then((response) => response.json())
    .then((data) => {
    //   console.log("data", data);
      return {
        count: data.count,
        results: data.results,
      };
    })
    .catch((err) => {
      console.log("err", err);
    });
};
// console.log(getPeoplePromise(fetch));

const getPeople = async (fetch) => {
  const getRequest = await fetch("http://swapi.py4e.com/api/people/");
  const data = await getRequest.json();

//   console.log("data 2", data);
  return {
    count: data.count,
    results: data.results,
  };
};

module.exports = {
    getPeople, getPeoplePromise
}