var express = require ('express');
var _ = require ('underscore');
// var repos = require ('./repos');
var run_cmd = require ('./run_cmd').run_cmd;
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/deploy', function(req, res) {

    var payload;
    if (typeof req.body === 'object')
        {payload = req.body.payload;}


    else {
        console.log(req.body);
        payload = JSON.parse(req.body);
    }

    run_cmd("cd ~/skye.kiwi && git pull");
    res.send('deployed');

    // _.each (repos, function (repo) {
    //     if (repo.name === payload.repository.name &&
    //         payload.ref.indexOf(repo.ref) >= 0) {
    //             repo.action(repo.name, repo.ref, payload);
    //     } res.send('deployed');
    // });
});
module.exports = router;
