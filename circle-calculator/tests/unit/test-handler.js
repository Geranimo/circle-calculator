'use strict';

const app = require('../../app.js');
const chai = require('chai');
const expect = chai.expect;
var event, context;

describe('Tests index', function () {

    it('verifies areas is calculated as expected', async () => {
        event =  {
            queryStringParameters : {
                radius : '2',
                type : 'area'
            }
        };
        const result = await app.lambdaHandler(event, context)

        expect(result).to.be.an('object');
        expect(result.statusCode).to.equal(200);
        expect(result.body).to.be.an('string');

        let response = JSON.parse(result.body);

        expect(response).to.be.an('object');
        expect(response.result).to.be.equal(12.566370614359172);
        expect(response.type).to.be.equal('area');
    });

    it('verifies diameter is calculated as expected', async () => {
        event =  {
            queryStringParameters : {
                radius : '2',
                type : 'diameter'
            }
        };
        const result = await app.lambdaHandler(event, context)

        expect(result).to.be.an('object');
        expect(result.statusCode).to.equal(200);
        expect(result.body).to.be.an('string');

        let response = JSON.parse(result.body);

        expect(response).to.be.an('object');
        expect(response.result).to.be.equal(4);
        expect(response.type).to.be.equal('diameter');

    });
});
