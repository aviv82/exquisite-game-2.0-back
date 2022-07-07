'use strict';

/**
 * exquisite service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::exquisite.exquisite');
