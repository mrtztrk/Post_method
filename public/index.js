const responseDataDiv = document.getElementById('responseData');

const API_ENDPOINT = "https://api.restful-api.dev/objects"

const postData = {
    name: 'Murat House',
    data: {
        tv: 'LG OLED 55',
        vacuum: 'Dyson animal pro',
        phone: 'Apple iphone 11',
        kitchen: 'philips airfyer'
    }
}

const waitedFunction = async () => {
    await fetch(API_ENDPOINT, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json', // Specify the content type as JSON
            // You may need to include other headers, like authorization tokens, if required by the API
        },
        body: JSON.stringify(postData), // Convert your data to a JSON string

    }).then(response => response.json())
        .then(data => {
            console.log('Post Request Response: ', data);
            responseDataDiv.textContent = `${data.name} post method olarak içerisindeki data ile gönderildi`
        }
        )
        .catch(err => {
            console.log(err)
        }
        )
}


waitedFunction()
