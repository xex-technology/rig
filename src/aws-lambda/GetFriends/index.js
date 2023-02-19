var AWS = require("aws-sdk");
AWS.config.update({region:'ap-southeast-2'});

var ddb = new AWS.DynamoDB({ apiVersion: "2012-08-10" });

exports.handler = async (event) => {
    
        const params = {
            TableName: 'Users'
        };

        const item = await ddb.scan(params).promise();
    
        const response = {
            statusCode: 200,
            body: JSON.stringify(item),
            headers: {
                "Access-Control-Allow-Headers" : 'Content-Type, X-API-Key',
                "Access-Control-Allow-Origin": "https://rig.dylanarmstrong.net",
                "Access-Control-Allow-Methods": "GET, OPTIONS",
            }
        };
    return response;   
    
};
