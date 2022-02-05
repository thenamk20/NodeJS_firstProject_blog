const newsRouter = require('./news')
const siteRouter = require('./site')
const mangaRouter = require('./manga')
const coursesRouter = require('./courses')
const meRouter = require('./me')
const testRouter = require('./test')

function route(app) {

    app.use('/news', newsRouter)
    app.use('/manga', mangaRouter)
    app.use('/courses', coursesRouter)
    app.use('/me', meRouter)
    app.use('/test', testRouter)
    app.use('/', siteRouter)
}

module.exports = route