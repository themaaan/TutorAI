fetch('http://localhost:5001/api/data', {
    method: 'GET',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
})
    .then(response => {
        console.log(response);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        console.log(data.message);
    })
    .catch(error => console.error('Error:', error));
