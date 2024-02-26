const { Router } = require('express');
const router = Router();

const twoNumberSum = require('./twoNumberSum');
const nonConstChg = require('./nonConstChg');

//Using POST so i can receive data in the req.body.
router.post('/twoNumberSum',twoNumberSum)
router.post('/nonConstChg',nonConstChg)

module.exports = router;