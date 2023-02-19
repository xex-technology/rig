var AWS = require("aws-sdk");
AWS.config.update({region:'ap-southeast-2'});

var ddb = new AWS.DynamoDB({ apiVersion: "2012-08-10" });

exports.handler = async (event) => {
    
    var userDetails = JSON.parse(event.body);
    
        const params = {
            TableName: 'Users'
        };
        
        const userScan = await ddb.scan(params).promise();
    
        for (var x = 0; x <= 1000; x++) {
            if(userDetails.username === userScan.Items[x].username.S && userDetails.password === userScan.Items[x].password.S) {
                    const response = {
                    statusCode: 200,
                    headers: {
                        "Access-Control-Allow-Headers" : 'Content-Type, X-API-Key',
                        "Access-Control-Allow-Origin": "https://rig.dylanarmstrong.net",
                        "Access-Control-Allow-Methods": "POST, OPTIONS",
                    }
                };
            return response;
            }
            
            else {
                console.log('Invalid username and or password!');
            }
          
    }
};
