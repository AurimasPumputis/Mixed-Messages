//Returns a random photo URL from NASA Mars Rover Photos API
const marsPhoto = () => {
    const request = new XMLHttpRequest();
    const randDay = Math.floor(Math.random() * 2667);
    const requestURL = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=${randDay}&api_key=fdQxe7OGPA0uiJdQ1f8upc2o1YOsvZYzKuhFBL0t`;
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();
    request.onload = () => {
        const response = request.response;
        const obj = response['photos'];
        const randPhoto = obj[Math.floor(Math.random() * Object.keys(obj).length)];
        const res = `Sol: ${randPhoto['sol']} (${randPhoto['earth_date']}), by ${randPhoto['rover']['name']}.`;
        console.log(res);
        console.log(randPhoto['img_src']);
    }
}
marsPhoto();

const marsWeather = () => {
    const request = new XMLHttpRequest();
    const randDay = Math.floor(Math.random() * 2667);
    const requestURL = `https://api.maas2.apollorion.com/${randDay}`;
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();
    request.onload = () => {
        const response = request.response;
        const marsDate = response['terrestrial_date'].split('T')[0];
        const res = `Sol: ${response['sol']} (${marsDate}), Max. temperature: ${response['max_gts_temp']}°C, Min. temperature: ${response['min_gts_temp']}°C.`
        console.log(res);
    }
}

marsWeather();