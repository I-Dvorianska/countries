import fetchCountries from './fetchCountries';
import debounce from 'lodash/debounce';

const DEBOUNCE_DELAY = 300;

const input = document.getElementById('search-box');

input.addEventListener('input', debounce(onSearch, DEBOUNCE_DELAY));

function onSearch(e) {
  e.preventDefault();

  const inputValue = e.target.value;
  if (inputValue.length > 0) {
    fetchCountries(
      `https://restcountries.eu/rest/v2/name/${inputValue}?fields=name;capital;population;flag;languages`,
    );
  }
  // if (inputValue.length === 0) {
  //   coutriesList.innerHTML = '';
  //   countryInfo.innerHTML = '';
  // }
}
