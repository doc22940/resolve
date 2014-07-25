var path = require('path');
var test = require('tap').test;
var resolve = require('../');

test('dotdot', function (t) {
    t.plan(4);
    var dir = __dirname + '/dotdot/abc';
    
    resolve('..', { basedir : dir }, function (err, res, pkg) {
        t.ifError(err);
        t.equal(res, __dirname + '/dotdot/index.js');
    });
    
    resolve('.', { basedir : dir }, function (err, res, pkg) {
        t.ifError(err);
        t.equal(res, dir + '/index.js');
    });
});
