import fetchCountries from './fetchCountries';

const input = document.getElementById('country');

input.addEventListener('input', onSearch);

function onSearch(e) {
  const inputValue = e.target.value;
  fetchCountries(https://restcountries.eu/rest/v2/name/{inputValue});
}
