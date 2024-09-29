const https = require('https');

const options = {
    hostname: 'fakestoreapi.com',
    path: '/products/1',
    method: 'GET'
};

const req = https.request(options, (apiRes) => {
    let data = '';

    apiRes.on('data', (chunk) => {
        data += chunk;
    });

    apiRes.on('end', () => {
        try {
            const jsonResponse = JSON.parse(data);
            console.log(jsonResponse);
        } catch (e) {
            console.error('Error parsing JSON:', e.message);
            console.log('Raw response:', data);
        }
    });
});

req.on('error', (e) => {
    console.error(`Problem with request: ${e.message}`);
});

req.end();
