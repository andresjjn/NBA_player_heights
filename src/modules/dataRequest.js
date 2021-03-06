const http = require('http');

const dataRequest = function() {
  return new Promise((resolve, reject) => {
    const options = {
        host: 'mach-eight.uc.r.appspot.com',
        method: 'GET'
    };
    const req = http.request(options, (res) => {
      if (res.statusCode < 200 || res.statusCode >= 300) {
            return reject(new Error('statusCode=' + res.statusCode));
        }
        var body = [];
        res.on('data', function(chunk) {
            body.push(chunk);
        });
        res.on('end', function() {
            try {
                body = JSON.parse(Buffer.concat(body).toString());
            } catch(e) {
                reject(e);
            }
            resolve(body);
        });
    });
    req.on('error', (e) => {
      reject(e.message);
    });
    req.end();
    });
}

module.exports = dataRequest;
