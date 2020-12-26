module.exports = (app) => {
    // MiddleWare Regsiter
    app.config.coreMiddleware.push('access')
}