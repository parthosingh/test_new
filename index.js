// index.js

const fetchCountries = async () => {
    try {
      const response = await fetch('https://restcountries.com/v3.1/all');
      if (!response.ok) {
        throw new Error('Failed to fetch countries');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
    }
  };
  
  const renderData = (countries) => {
    const container = document.querySelector('.container');
    container.innerHTML = '';
  
    countries.forEach((country) => {
      const card = document.createElement('div');
      card.classList.add('card');
  
      const countryName = document.createElement('h2');
      countryName.textContent = country.name.common;
      card.appendChild(countryName);
  
      // Creating flag element for India
      if (country.name.common === 'India') {
        const flag = document.createElement('div');
        flag.classList.add('flag');
        flag.innerHTML = `
          <div class="saffron"></div>
          <div class="white"></div>
          <div class="green"></div>
          <div class="wheel">
            <div class="inner-wheel"></div>
          </div>
        `;
        card.appendChild(flag);
      }
  
      // Adding population, region, and capital information
      const population = document.createElement('p');
      population.textContent = `Population: 1,38,004,385`;
      card.appendChild(population);
  
      const region = document.createElement('p');
      region.textContent = `Region: Asia`;
      card.appendChild(region);
  
      const capital = document.createElement('p');
      capital.textContent = `Capital: New Delhi`;
      card.appendChild(capital);
  
      container.appendChild(card);
    });
  };
  
  window.onload = async () => {
    const countriesData = await fetchCountries();
    renderData(countriesData);
  };
  