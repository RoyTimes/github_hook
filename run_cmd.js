exports.run_cmd = function (cmd) {
	var exec = require ('child_process').exec;
	exec (cmd, function (err, stdout, stderr) {
		if (err)
			console.log ("Error occer while running the cmd: " + stderr);
		else console.log (stdout);
	});
}
