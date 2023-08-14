const https = require('https');
require("dotenv").config();

function makeModel(requestBody) {
  return new Promise((resolve, reject) => {
    const headers = getAuthenticationHeader(process.env.VRPUBLIC, process.env.VRSECRET);
    const options = {
      hostname: 'api.revery.ai',
      path: "/console/v1/process_new_garment",
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...headers
      },
    };

    const req = https.request(options, (res) => {
      let data = '';

      res.on('data', (chunk) => {
        data += chunk;
      });

      res.on('end', () => {
        resolve(data); // Resolve the promise with the response data
      });
    });

    req.on('error', (error) => {
      reject(error); // Reject the promise with the error
    });

    if (requestBody) {
      req.write(JSON.stringify(requestBody));
    }

    req.end();
  });
}

module.exports = {
  MakeRequest: (vrprop) => {
    console.log(vrprop)
    var requestBody={};
    if(vrprop.vrpos==="bottoms"){
    requestBody = {
      category: vrprop.vrpos,
      bottoms_sub_category:vrprop.vrpossec,
      gender: vrprop.gender,
      garment_img_url: vrprop.garment_img_url
    };}
    else{
      requestBody = {
        category: vrprop.category,
        gender: vrprop.gender,
        garment_img_url: vrprop.garment_img_url
      };
    }
    return makeModel(requestBody); // Return the promise from makeModel
  }
};

const getAuthenticationHeader=(public_key, secret_key)=> {
    var pbkdf2 = require('pbkdf2')
    let time =  parseInt(Date.now()/1000);
    var derivedKey = pbkdf2.pbkdf2Sync(secret_key, time.toString(), 128, 32, 'sha256');
    derivedKey = derivedKey.toString('hex');

    return {
      "public_key": public_key,
      "one_time_code": derivedKey,
      "timestamp": time,
  };
}