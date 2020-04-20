let response;

exports.lambdaHandler = async (event, context) => {
    const radius = event.queryStringParameters.radius;
    const circleArea = Math.PI * (Math.pow(radius, 2) );
    try {
        response = {
            'statusCode': 200,
            'body': JSON.stringify({
                area: circleArea,
            })
        }
    } catch (err) {
        console.log(err);
        return err;
    }

    return response
};
