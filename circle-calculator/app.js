let response;

exports.lambdaHandler = async (event, context) => {
    const radius = event.queryStringParameters.radius;
    const type = event.queryStringParameters.type;
    let value;
    if (type === 'area') {
        value = Math.PI * (Math.pow(radius, 2));
    } else if (type === 'diameter') {
        value = 2 * radius;
    }
    
    try {
        response = {
            'statusCode': 200,
            'body': JSON.stringify({
                type: type,
                result: value,
            })
        }
    } catch (err) {
        console.log(err);
        return err;
    }

    return response
};
