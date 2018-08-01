var exec = require('cordova/exec');

exports.vib = function (arg0, success, error) {
    exec(success, error, 'Etevibration', 'vib', [arg0]);
};
