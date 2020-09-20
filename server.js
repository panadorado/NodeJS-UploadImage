// directory
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const router = require('./routers/routers');

// path.resolve(__dirname, 'views')
// set đường dẫn tuyệt đối và thư mục views
// với path.resolve(__dirname, 'views')
app.set('views', path.resolve(__dirname, 'views'));
app.set('view engine', 'ejs');

// ....
app.use(bodyParser.urlencoded({extended: false}));

// gọi và sử dụng file routers.js có trong tư mục routes
app.use(router);

// sử dụng file tĩnh có sẵn trong thư mục public
app.use(express.static('public'));

const port = 3000;
app.listen(port, (req, res) => {
    console.log(`Server started on port %s`, port);
});