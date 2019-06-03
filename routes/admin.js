const express = require('express');
const router = express.Router();

router.get('/add-product', (req, res, next) => {
  res.send(
    `<form action="/admin/product" method="POST">
      <label>Product</label>
      <input type="text" name="title"></input>
      <button type="submit">Send</button>
    </form>`
  );
});

router.post('/product', (req, res, next) => {
  console.log(req.body);
  res.redirect('/shop');
});

module.exports = router;