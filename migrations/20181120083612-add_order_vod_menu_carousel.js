'use strict';
var winston = require('winston');

module.exports = {
    up: function (queryInterface, Sequelize) {
        return queryInterface.addColumn('vod_menu_carousel', 'order', {type: Sequelize.INTEGER(15), allowNull: false})
            .catch(function(err) {winston.error('Adding column vod_menu_carousel.order failed with error message: ',err.message);});
    },

    down: function (queryInterface, Sequelize) {
        return queryInterface.removeColumn('vod_menu_carousel', 'order')
            .catch(function(err) {winston.error('Removing column vod_menu_carousel.order failed with error message: ',err.message);});
    }
};