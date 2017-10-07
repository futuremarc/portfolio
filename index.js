let express = require('express');
let path = require('path');
let app = express();

app.set('port', 3003);

app.use(express.static(path.join(__dirname, 'dist')));

// Listen for requests
let server = app.listen(app.get('port'), function() {
  let port = server.address().port;
  console.log('app on ' + port);
});
