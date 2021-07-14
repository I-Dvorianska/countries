export default function fetchCountries(searchQuery) {
  return fetch(searchQuery)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .then(data => console.log(data))
    .catch(error => console.log('it`s 404'));
}
