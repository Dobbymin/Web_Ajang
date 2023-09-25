if (process.env.NODE_ENV == 'production') {
    // 배포한 후
    module.exports = require('./prod');
} else {
    // Local 환경에서
    module.exports = require('./dev');
}
