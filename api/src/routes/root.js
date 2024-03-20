'use strict';

module.exports = async function (fastify, opts) {
  fastify.post('/', async function (request, reply) {
    request.validateInput(
      { foo: 'bar' },
      {
        type: 'object',
        properties: {
          foo: {
            type: 'string',
          },
        },
      },
      'body'
    );

    const stella_mare = this.mongo.db.collection('stella_mare');

    const result = await stella_mare.insertOne({
      inputType: request.body.typeInput,
    });

    console.log(result);

    return { logged: true };
  });
};
