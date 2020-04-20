let response;

exports.lambdaHandler = async (event, context) => {
    const radius = event.queryStringParameters.radius;
    console.log(Math.PI * (Math.pow(radius, 2) ));
    try {
        response = {
            'statusCode': 200,
            'body': JSON.stringify({
                message: 'hello world',
            })
        }
    } catch (err) {
        console.log(err);
        return err;
    }

    return response
};
