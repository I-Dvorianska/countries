import countryCard from '../templates/countryCard.hbs';
import countries from '../templates/countriesList.hbs';
import { Notify } from 'notiflix';
const coutriesList = document.querySelector('.country-list');
const countryInfo = document.querySelector('.country-info');

export default function fetchCountries(searchQuery) {
  return fetch(searchQuery)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .then(country => {
      console.log(country);

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
    })
    .catch(error => Notify.failure('Oops, there is no country with that name'));
}
