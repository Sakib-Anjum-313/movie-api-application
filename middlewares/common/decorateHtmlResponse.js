

function decorateHtmlResponse(page_title) {
    return function (req, res, next) {
        res.locals.html = true; 
        res.locals.title = `${page_title} - ${process.env.APP_NAME}`;
        // console.log(`${__dirname}`);
        next();
    }
}


module.exports = decorateHtmlResponse;