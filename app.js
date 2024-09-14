const API_KEY = '2bdcf74ad6153c046e4af6e924ff3397';

async function fetchGeoData() {
    try {
        const response = await fetch(`https://api.ipstack.com/check?access_key=${API_KEY}`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();

        populateLocation(data)

        console.log(data)
    } catch (error) {
        console.error('Error fetching geolocation data:', error)
        document.getElementById('status').innerHTML = '<p>Sorry, there was an error fetching the geolocation data.</p>'
    }
}

window.onload = fetchGeoData;

function populateLocation(locData){
    let html = `
        <ul class="data">
            <li class="data-item">
                <span class="item-label">City</span>
                <span class="item-data">${locData.city}</span>
            </li>
            <li class="data-item">
                <span class="item-label">Continent Code</span>
                <span class="item-data">${locData.continent_code}</span>
            </li>
            <li class="data-item">
                <span class="item-label">Continent Name</span>
                <span class="item-data">${locData.continent_name}</span>
            </li>
            <li class="data-item">
                <span class="item-label">Country Code</span>
                <span class="item-data">${locData.country_code}</span>
            </li>
            <li class="data-item">
                <span class="item-label">Country Name</span>
                <span class="item-data">${locData.country_name}</span>
            </li>
            <li class="data-item">
                <span class="item-label">DMA</span>
                <span class="item-data">${locData.dma}</span>
            </li>
        </ul>
    `
    document.getElementById("card-body").innerHTML = html
}