var fs = require('fs')
  , gm = require('gm').subClass({imageMagick: true});

  gm('./default.jpg')
.resize(240, 240)

.write('./1.png', function (err) {
	console.log(err)
  if (!err) console.log('done');
});