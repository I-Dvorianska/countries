import fetchCountries from './fetchCountries';
import debounce from 'lodash/debounce';
import countryCard from '../templates/countryCard.hbs';
import countries from '../templates/countriesList.hbs';
import { Notify } from 'notiflix';

const DEBOUNCE_DELAY = 300;

const input = document.getElementById('search-box');
const coutriesList = document.querySelector('.country-list');
const countryInfo = document.querySelector('.country-info');

input.addEventListener('input', debounce(onSearch, DEBOUNCE_DELAY));

function onSearch(e) {
  e.preventDefault();

  const inputValue = e.target.value.trim();

  if (inputValue === '') {
    clearMarkup();
    return;
  }

  fetchCountries(inputValue)
    .then(markup)
    .catch(error => Notify.failure('Oops, there is no country with that name'));
}

function markup(country) {
  if (country.length === 1) {
    coutriesList.innerHTML = '';
    const markup = countryCard(country);
    countryInfo.innerHTML = markup;
  }
  if (country.length >= 2 && country.length <= 10) {
    countryInfo.innerHTML = '';
    const listMarkup = countries(country);
    coutriesList.innerHTML = listMarkup;
  }
  if (country.length > 10) {
    coutriesList.innerHTML = '';
    countryInfo.innerHTML = '';
    Notify.info('Too many matches found. Please enter a more specific name.');
  }
}

function clearMarkup() {
  coutriesList.innerHTML = '';
  countryInfo.innerHTML = '';
}
