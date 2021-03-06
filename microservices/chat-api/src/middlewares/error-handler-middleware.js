const errorHandlerMiddleware = async (ctx, next) => {
    try {
        await next();
    } catch (err) {
        console.log(err)
        ctx.response.status = err.status || 500;
        ctx.response.body = {
            message: err.message || 'Internal server error',
        };
        ctx.app.emit('error', err, ctx);
    }
}

module.exports = errorHandlerMiddleware;