export async function fetchCountries(country) {
  const response = await fetch(`https://restcountries.com/v3.1/name/${country}?fields=name,capital,population,flags,languages`);
  return await response.json();
}