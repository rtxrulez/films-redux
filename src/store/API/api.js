export default {
  fetchFilms: () => {
    return fetch("http://api.tvmaze.com/shows/1/episodes?specials=1", {
      method: "GET",
      mode: "cors"
    }).then(response => {
      return response.json();
    });
  }
};
