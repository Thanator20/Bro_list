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
    db.insert(
        'userFriendList',
        ['id', 'name', 'email', 'comment', 'favFood', 'relationshipStatus'],
        [1, 'Parker', 'parker@parkerNet.com', 'talks too much', 2, 1]
    );
    db.insert(
        'userFriendList',
        ['id', 'name', 'email', 'comment', 'favFood', 'relationshipStatus'],
        [2, 'Jason', 'test@test.hu', 'Hyperactive', 1, 0]
    );
    return db.insert(
        'userFriendList',
        ['id', 'name', 'email', 'comment', 'favFood', 'relationshipStatus'],
        [3, 'Nicol', 'test@test.com', 'n/a', 3, 2]
    );
};

exports.down = function (db) {
    return db.runSql('TRUNCATE TABLE userFriendList;');
};

exports._meta = {
    version: 1,
};
