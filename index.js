var constants = require('./lib/constants.js');
var request = require('./lib/request.js');
var login = require('./lib/login.js');

var exports = module.exports = {
    login: login.login,
    LoginError: login.LoginError,

    request: request.request,
    RequestError: request.RequestError,
};

// 导出错误类型码
Object.keys(constants).forEach(function (key) {
    if (key.indexOf('ERR_') === 0) {
        exports[key] = constants[key];
    }
});