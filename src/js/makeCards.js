import fetchCountries from './fetchCountries';
import countryCard from '../templates/countryCard.hbs';

const input = document.getElementById('search-box');

input.addEventListener('input', onSearch);

function onSearch(e) {
  e.preventDefault();

  const inputValue = e.target.value;
  fetchCountries(
    `https://restcountries.eu/rest/v2/name/${inputValue}?fields=name;capital;population;flag;languages`,
  );
}
