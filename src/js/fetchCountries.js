import countryCard from '../templates/countryCard.hbs';
import countries from '../templates/countriesList.hbs';
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
        const markup = countryCard(country);
        countryInfo.innerHTML = markup;
      }
      if (country.length >= 2 && country.length <= 10) {
        const listMarkup = countries(country);
        coutriesList.innerHTML = listMarkup;
      }
      if (country.length > 10) {
        alert('Too many matches found. Please enter a more specific name.');
      }
    })
    .catch(error => console.log('it`s 404'));
}
