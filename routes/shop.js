const path = require('path');
const express = require('express');
const router = express.Router();
const rootDir = require('../util/path');


router.get('/', (req, res, next) => {
  //__dirname: absolute path from os to project root folder
  res.sendFile(path.join(rootDir, 'views', 'shop.html'))
});

module.exports = router;