'use strict';

require('dotenv').config();

const fp = require('fastify-plugin');

/**
 * This plugins adds some utilities to handle http errors
 *
 * @see https://github.com/fastify/fastify-sensible
 */
module.exports = fp(async function (fastify, opts) {
  fastify.register(require('@fastify/mongodb'), {
    forceClose: true,

    url: `${process.env.DATABASE_URL}/stella_mare`,
  });
});
