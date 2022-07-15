'use strict';

/**
 * tale service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::tale.tale');
