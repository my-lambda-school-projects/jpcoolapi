// routers are like mini applications
const express = require('express');

const router = express.Router();

// middleware

// endpoints when url begins with /orders
router.get('/', (req, res) => {
  res.send('GET /orders endpoint');
});

// /orders/:id
router.get('/:id', (req, res) => {
  res.send(`GET /orders/${req.params.id}`);
});

module.exports = router;
