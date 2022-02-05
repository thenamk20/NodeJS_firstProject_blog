

class TestController {

    // [GET] /test
    show(req, res, next){
        res.send('testing')
    }
}


module.exports = new TestController()