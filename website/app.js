/* Global Variables */

// url for the open weather map api: 
const baseUrl = 'https://api.openweathermap.org/data/2.5/weather?zip='
    //Personal API Key for OpenWeatherMap API
const apiKey = 'bf4d6b2a07b515f13fe54a3044d59a6e';

// Event listener to add function to existing HTML DOM element
const submitBtn = document.getElementById('generate');
submitBtn.addEventListener('click', onSubmit);

/* Function called by event listener */
function onSubmit() {
    const zip = document.getElementById('zip').value;
    const countryCode = document.getElementById('country-code').value;
    const url = baseUrl + zip + ',' + countryCode + '&appid=' + apiKey;
    getWebAPIData(url)
        .then(allData => {
            const specificData = {
                date: getCurrentDate(),
                temp: allData.main.temp,
                content: allData.main.feels_like
            };
            postData('/addData', specificData)
                .then(returnedEntry => {
                    //update the dom of the elements
                    updateUI(returnedEntry);
                });
        }).catch((error) => {
            console.log('error', error)
                //set an error message in the most recent entry field
            document.getElementById('date').innerHTML = 'invalid input data';
            document.getElementById('temp').innerHTML = '';
            document.getElementById('content').innerHTML = '';
        });
}
/* Function to GET Web API Data*/
const getWebAPIData = async(url) => {
    const response = await fetch(url);
    if (response.status === 200) {
        //transform into json
        const allData = await response.json();
        return allData;
    } else {
        //throw an error if the status code is not 200 
        throw new Error();
    }
}

/* Update UI elements: date, temp, content with the Weather API data */
function updateUI(specificData) {
    document.getElementById('date').innerHTML = specificData.date;
    document.getElementById('temp').innerHTML = Math.round(specificData.temp) + ' degrees Fahrenheit';
    document.getElementById('content').innerHTML = specificData.content;

    //get all the data saved in the server from the clients request to the weather api
    getProjectData('/projectData')
        .then(data => {
            document.getElementById('resultsHolder').innerHTML = data.length;
        });
}

//returns the formated current date
function getCurrentDate() {
    const currentDate = new Date();
    //format the date received from the api
    const dateFormated = currentDate.getMonth() + 1 + '.' + currentDate.getDate() + '.' + currentDate.getFullYear();
    return dateFormated;
}

/* Function to POST data */
const postData = async(url, data) => {
    const response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    });
    return response.json();
};

/* Function to GET Project Data */
const getProjectData = async(url) => {
    try {
        const response = await fetch(url);
        const projectData = await response.json();
        return projectData;
    } catch (error) {
        console.log('error', error)
    }
}