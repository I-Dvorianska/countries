export default function fetchCountries(searchQuery) {
  fetch(searchQuery).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}
