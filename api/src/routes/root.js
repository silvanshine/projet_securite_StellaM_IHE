'use strict';

module.exports = async function (fastify, opts) {
  fastify.get('/', async function (request, reply) {
    return { logged: true };
  });

  fastify.post('/', async function (request, reply) {
    const stella_mare = this.mongo.db.collection('stella_mare');

    const result = await stella_mare.insertOne({
      inputType: request.body.typeInput,
      attack: request.body.attack,
      sessionID: request.body.sessionID,
      timestamp: request.body.timestamp,
    });

    console.log(result);

    return { logged: true };
  });
};
