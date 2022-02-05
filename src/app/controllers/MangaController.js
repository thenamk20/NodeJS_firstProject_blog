
class MangaController {

    // [GET] /manga
    index(req, res){
        res.render('manga')
    }

    search(req, res){
        res.send('search manga')
    }

}

module.exports = new MangaController()