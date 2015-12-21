var express = require ('express');
var _ = require ('underscore');
// var repos = require ('./repos');
var run_cmd = require ('./run_cmd');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.post('/deploy', function(req, res) {

    var payload;
    if (typeof req.body.payload === 'object')
        payload = req.body.payload;
    else payload = JSON.parse(req.body.payload);

    run_cmd("cd ~/skye.kiwi && git pull");

    // _.each (repos, function (repo) {
    //     if (repo.name === payload.repository.name &&
    //         payload.ref.indexOf(repo.ref) >= 0) {
    //             repo.action(repo.name, repo.ref, payload);
    //     } res.send('deployed');
    // });
});
module.exports = router;
