//Returns a random photo URL from NASA Mars Rover Photos API
const marsPhoto = () => {
    const request = new XMLHttpRequest();
    const randDay = Math.floor(Math.random() * 3000);
    const requestURL = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=${randDay}&api_key=fdQxe7OGPA0uiJdQ1f8upc2o1YOsvZYzKuhFBL0t`;
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();
    request.onload = () => {
        const response = request.response;
        const obj = response['photos'];
        const randPhoto = obj[Math.floor(Math.random() * Object.keys(obj).length)];
        console.log(randPhoto['img_src']);
    }
}
marsPhoto();