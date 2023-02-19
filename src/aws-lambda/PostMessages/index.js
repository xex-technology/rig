var AWS = require('aws-sdk');
AWS.config.update({region: 'ap-southeast-2'});

exports.handler = async (event) => {
    var ddb = new AWS.DynamoDB({apiVersion: '2012-08-10'});
    
    var dataBody = JSON.parse(event.body);
      const params = {
        TableName: 'Messages',
        Item: {
            id: {N: dataBody.Id},
            from: {S: dataBody.From},
            to: {S: dataBody.To},
            message: {S: dataBody.Message},
        }
    }
    
    const data = await ddb.putItem(params).promise();

    const response = {
        statusCode: 200,
        body: JSON.stringify(data),
        headers: {
            "Access-Control-Allow-Headers" : 'Content-Type, X-API-Key',
            "Access-Control-Allow-Origin": "https://rig.dylanarmstrong.net",
            "Access-Control-Allow-Methods": "POST, OPTIONS",
            
        }
    };
    return response;  
    
    
};
