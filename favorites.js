const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
  const favorite = req.body;
  res.status(201).json({
    message: 'Favorite added successfully!',
    data: favorite
  });
});

module.exports = router;
