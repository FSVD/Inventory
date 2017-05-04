function http() {
    this.configure = function(app) {
        
        app.get('/', function(req, res){
            res.render('index', { title: 'MEAN Practice' });
        })
    }
}

module.exports = new http();