'use strict';

var dbm;
var type;
var seed;

/**
 * We receive the dbmigrate dependency from dbmigrate initially.
 * This enables us to not have to rely on NODE_PATH.
 */
exports.setup = function (options, seedLink) {
    dbm = options.dbmigrate;
    type = dbm.dataType;
    seed = seedLink;
};

exports.up = function (db) {
    db.insert('favFood', ['id', 'name'], [1, 'Mirrored eggs']);
    db.insert('favFood', ['id', 'name'], [2, 'Fried shrimps']);
    return db.insert('favFood', ['id', 'name'], [3, 'Hungaryan Gulas']);
};

exports.down = function (db) {
    return db.runSql('TRUNCATE TABLE favFood;');
};

exports._meta = {
    version: 1,
};
